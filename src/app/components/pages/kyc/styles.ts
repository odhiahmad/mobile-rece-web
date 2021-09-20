import styled from 'styled-components';
import { colors, sizes } from 'styles/variables';

const PageKycStyles = styled.div`
  .page-kyc {
    height: calc(100vh - ${sizes.topbarHeight}px);
  }
  .page-kyc_display {
    width: 250px;
    height: 250px;
    background-color: ${colors.black10};
    border-radius: 50%;
    margin-bottom: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }
`;

export default PageKycStyles;
