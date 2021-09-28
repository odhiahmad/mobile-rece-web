import * as React from 'react';
import Sheet from 'react-modal-sheet';
import styled from 'styled-components';
import Input from 'app/components/atoms/input/loadable';
import Button from 'app/components/atoms/button/loadable';

interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined | null;
  options?: {
    label: string | number;
    value: string;
  }[];
  label?: string;
  title?: string | undefined;
  // logo?: string | null;
  // colorScheme?: 'normal' | 'grey';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-container {
    border-top-right-radius: 22px !important;
    border-top-left-radius: 22px !important;
  }
`;

export function SelectBottomSheet({
  id = '',
  name = '',
  value: inValue = undefined,
  title = undefined,
  options = [],
  label = '',
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
}: PropTypes) {
  const [value, setValue] = React.useState(inValue || '');
  const [isOpen, setOpen] = React.useState(false);
  // CALLBACK
  const onDismiss = () => {
    setOpen(false);
  };
  const onBeforeChange = event => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };
  const onBeforeClick = () => {
    if (options.length > 0) {
      setOpen(true);
    }
    onClick();
  };
  const valueProps =
    value !== undefined
      ? {
          value:
            value === ''
              ? ''
              : options.length > 0
              ? options[options.findIndex(opt => opt.value === value)].label
              : '',
        }
      : {};
  return (
    <>
      <Input
        id={id}
        name={name}
        type="text"
        label={label}
        placeholder={placeholder}
        onBlur={onBlur}
        onClick={onBeforeClick}
        isSelect
        {...valueProps}
      />
      <CustomSheet
        isOpen={isOpen}
        onClose={onDismiss}
        snapPoints={[0.8]}
        initialSnap={0}
      >
        <CustomSheet.Container>
          <CustomSheet.Header />
          <CustomSheet.Content>
            <div className="select-bottom-sheet_content flex-column h-100 pr-1-half pl-1-half pb-1-half">
              {title && (
                <div className="text-sub-title text-heavy text-center">
                  {title}
                </div>
              )}
              <div className="flex-full overflow-y-scroll pb-1-half">
                {options.map(opt => (
                  <div
                    key={`radio-${name}-${opt.value}`}
                    className="flex flex-v-center flex-h-space pb-1 pt-1 main-border-bottom"
                  >
                    <div>{opt.label}</div>
                    <div>
                      <label className="radio">
                        <input
                          type="radio"
                          name={name}
                          value={opt.value}
                          onChange={onBeforeChange}
                          checked={value === opt.value}
                          hidden
                          className="hidden"
                        />
                        <span className="label"></span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  id={`select-bottom-sheet-${name}`}
                  type="button"
                  onClick={onDismiss}
                  className="w-100"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </CustomSheet.Content>
        </CustomSheet.Container>
      </CustomSheet>
    </>
  );
}
