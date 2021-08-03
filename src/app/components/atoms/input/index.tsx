import * as React from 'react';
import InputStyles from './styles';
import eyeLogo from 'assets/img/login/eye.png';

export interface PropTypes {
  logo?: string | null;
  colorScheme?: 'normal' | 'grey';
  type?: 'text' | 'password';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
}

export function Input({
  logo = null,
  colorScheme = 'normal',
  placeholder = '',
  type = 'text',
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
          type={type === 'password' && showPass ? 'text' : type}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            <img src={eyeLogo} alt="Show Password Logo" />
          </button>
        )}
      </InputStyles>
    </>
  );
}
