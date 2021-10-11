import * as React from 'react';
import Input from 'app/components/atoms/input/loadable';
import { rpMasking } from 'utils/number';

interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined | null;
  label?: string;
  masking?: 'rupiah' | 'none';
  logo?: string | null;
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
  masking = 'rupiah',
  placeholder = '',
  colorScheme = 'normal',
  logo = null,
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  error = false,
  errorMsg = '',
}: PropTypes) {
  const [value, setValue] = React.useState(inValue);
  const onBeforeChange = (event, value) => {
    // GET NUMBER ONLY
    const valNumber = value.replace(/\D/g, '');
    setValue(valNumber);
    onChange(event, valNumber);
  };
  const renderValue = React.useCallback(
    val => {
      if (masking === 'none') {
        return val;
      }
      return rpMasking(val);
    },
    [masking],
  );
  const valueProps =
    value !== null
      ? { value: value === '' ? inValue : renderValue(inValue) }
      : {};
  return (
    <>
      <Input
        id={id}
        name={name}
        type="text"
        colorScheme={colorScheme}
        logo={logo}
        label={label}
        placeholder={placeholder}
        onChange={onBeforeChange}
        onBlur={onBlur}
        onClick={onClick}
        error={error}
        errorMsg={errorMsg}
        {...valueProps}
      />
    </>
  );
}
