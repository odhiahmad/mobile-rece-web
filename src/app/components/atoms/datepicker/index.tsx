import React from 'react';
import dateDayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Input from 'app/components/atoms/input/loadable';
import dayjs from 'dayjs';

export interface PropTypes {
  dateType: 'date' | 'datetime';
  id: string;
  label?: string;
  format?: string;
  value?: Date;
  minDate?: any;
  maxDate?: any;
  isMinDate?: boolean;
  isMaxDate?: boolean;
  disabled?: boolean;
  returnFormat?: string;
  views?: ('year' | 'month' | 'date')[];
  onChange?: (event?: any, newValue?: string) => void | any;
  // INPUT PROPS
  name: string;
  logo?: string | null;
  error?: boolean;
  errorMsg?: string;
  colorScheme?: 'normal' | 'grey';
  placeholder?: string;
  onBlur?: (event?: any) => any;
}

export const DatePickerComponent: React.FunctionComponent<PropTypes> = ({
  id = '',
  label = '',
  format = 'DD-MM-YYYY',
  value = new Date(),
  minDate = undefined,
  maxDate = undefined,
  disabled = false,
  onChange = () => {},
  views = ['year', 'month', 'date'],
  // INPUT PROPS
  name = '',
  logo = null,
  error = false,
  errorMsg = '',
  colorScheme = 'normal',
  placeholder = '',
  onBlur = () => {},
}: PropTypes) => {
  // STATE
  const [open, setOpen] = React.useState(false);
  // [NOTE] complete documentation: https://material-ui-pickers.dev/api/DatePicker
  // OTHER
  const beforeOnChange = date => {
    setOpen(false);
    onChange(date, date.format(format));
  };
  return (
    <MuiPickersUtilsProvider utils={dateDayJsUtils}>
      <DatePicker
        id={id}
        label={label}
        value={value}
        onChange={beforeOnChange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        views={views}
        open={open}
        onClose={() => setOpen(false)}
        TextFieldComponent={() => (
          <Input
            id={id}
            name={name}
            value={dayjs(value).format(format)}
            type="text"
            logo={logo}
            placeholder={placeholder}
            colorScheme={colorScheme}
            onClick={() => setOpen(true)}
            onBlur={onBlur}
            error={error}
            errorMsg={errorMsg}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};
