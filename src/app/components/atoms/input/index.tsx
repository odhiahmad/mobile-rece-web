import * as React from 'react';
import InputStyles from './styles';
import eyeLogo from 'assets/img/login/eye.png';

export interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined;
  label?: string;
  logo?: string | null;
  colorScheme?: 'normal' | 'grey';
  type?: 'text' | 'password' | 'number';
  isSelect?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

export function Input({
  logo = null,
  colorScheme = 'normal',
  placeholder = '',
  type = 'text',
  id = '',
  name = '',
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  error = false,
  errorMsg = '',
  value = undefined,
  label = '',
}: PropTypes) {
  const [showPass, setShowPass] = React.useState(false);
  const valueProps = value !== undefined ? { value } : {};
  return (
    <>
      <InputStyles
        hasLogo={logo !== null ? true : false}
        type={type}
        bgColorScheme={colorScheme}
      >
        {logo && (
          <div className="input_logo flex-center">
            <img src={logo} alt="Input Side Logo" />
          </div>
        )}
        <input
          id={id}
          name={name}
          onChange={e => {
            e.persist();
            onChange(e, e.target.value);
          }}
          onClick={onClick}
          onKeyUp={onBlur}
          type={type === 'password' && showPass ? 'text' : type}
          placeholder={colorScheme === 'grey' ? placeholder : ' '}
          {...valueProps}
        />
        {type === 'password' && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            <img src={eyeLogo} alt="Show Password Logo" />
          </button>
        )}
        <div className="input_label-normal">{label}</div>
        {error && (
          <span className="input_error-msg ellipsis-text">{errorMsg}</span>
        )}
      </InputStyles>
    </>
  );
}
