import * as React from 'react';
import Input from 'app/components/atoms/input/loadable';
import { rpMasking } from 'utils/number';

interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined | null;
  label?: string;
  // logo?: string | null;
  colorScheme?: 'normal' | 'grey';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

export function InputNumber({
  id = '',
  name = '',
  value: inValue = undefined,
  label = '',
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
}: PropTypes) {
  const [value, setValue] = React.useState(inValue);
  const onBeforeChange = (event, value) => {
    // GET NUMBER ONLY
    const valNumber = value.replace(/\D/g, '');
    setValue(valNumber);
    onChange(event, valNumber);
  };
  const valueProps =
    value !== null ? { value: value === '' ? '' : rpMasking(value) } : {};
  return (
    <>
      <Input
        id={id}
        name={name}
        type="text"
        label={label}
        placeholder={placeholder}
        onChange={onBeforeChange}
        onBlur={onBlur}
        onClick={onClick}
        {...valueProps}
      />
    </>
  );
}
