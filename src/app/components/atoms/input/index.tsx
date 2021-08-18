import * as React from 'react';
import InputStyles from './styles';
import eyeLogo from 'assets/img/login/eye.png';

export interface PropTypes {
  id: string;
  name: string;
  labrl?: string;
  logo?: string | null;
  colorScheme?: 'normal' | 'grey';
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
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
  error = false,
  errorMsg = '',
}: PropTypes) {
  const [showPass, setShowPass] = React.useState(false);
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
          onKeyUp={onBlur}
          type={type === 'password' && showPass ? 'text' : type}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            <img src={eyeLogo} alt="Show Password Logo" />
          </button>
        )}
        {error && (
          <span className="input_error-msg ellipsis-text">{errorMsg}</span>
        )}
      </InputStyles>
    </>
  );
}
