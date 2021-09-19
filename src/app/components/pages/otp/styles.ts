import styled from 'styled-components';
import { colors, windows } from 'styles/variables';

const PageOtpStyles = styled.div`
  .page-otp_input-wrapper {
    max-width: 360px;
    margin: 0 auto;
  }
  .page-otp_input {
    max-width: 48px;
    height: 56px;
    background-color: ${colors.black10};
    border-radius: 10px;
  }
  .page-otp_input-box {
    height: 0px;
    opacity: 0;
    border: none;
    outline: none;
  }
  ${windows.medium(`
    .page-otp_top {
      margin-bottom: 3rem;
    }
    .page-otp_action {
      margin-top: 6rem;
    }
  `)}
`;

export default PageOtpStyles;
