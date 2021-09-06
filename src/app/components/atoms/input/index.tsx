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
  isInputNumber?: boolean;
  placeholder?: string;
  className?: string;
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
  className = '',
  // isSelect = false,
  isInputNumber = false,
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  error = false,
  errorMsg = '',
  value = undefined,
  label = '',
}: PropTypes) {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showPass, setShowPass] = React.useState(false);
  const onBeforeClick = () => {
    inputRef.current.focus();
    onClick();
  };
  const valueProps = value !== undefined ? { value } : {};
  return (
    <>
      <InputStyles
        hasLogo={logo !== null ? true : false}
        type={type}
        bgColorScheme={colorScheme}
        className={className}
      >
        {logo && (
          <div className="input_logo flex-center">
            <img src={logo} alt="Input Side Logo" />
          </div>
        )}
        {!isInputNumber && (
          <input
            id={id}
            ref={inputRef}
            name={name}
            onChange={e => {
              e.persist();
              onChange(e, e.target.value);
            }}
            onClick={onBeforeClick}
            onKeyUp={onBlur}
            type={type === 'password' && showPass ? 'text' : type}
            placeholder={colorScheme === 'grey' ? placeholder : ' '}
            {...valueProps}
          />
        )}
        {isInputNumber && <div className="input-number">{value}</div>}
        {type === 'password' && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            <img src={eyeLogo} alt="Show Password Logo" />
          </button>
        )}
        {colorScheme === 'normal' && (
          <div className="input_label-normal">{label}</div>
        )}
        {error && (
          <span className="input_error-msg ellipsis-text">{errorMsg}</span>
        )}
      </InputStyles>
    </>
  );
}
