import styled from 'styled-components';
import CardBg from 'assets/img/bg-card.png';
import { colors } from 'styles/variables';

const PageLoginStyles = styled.div`
  .homepage_top-card {
    padding-bottom: 100px;
    margin-bottom: 100px;
  }

  .homepage_user-card {
    position: absolute;
    left: 0px;
    right: 0px;
    height: 190px;
    background-image: url(${CardBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media screen and (min-width: 400px) {
    .homepage_top-card {
      margin-bottom: 130px;
    }
    .homepage_user-card {
      height: 225px;
    }
  }

  @media screen and (min-width: 500px) {
    .homepage_top-card {
      margin-bottom: 150px;
    }
    .homepage_user-card {
      height: 245px;
    }
  }

  .homepage_user-card-wrapper {
    height: 100%;
    align-content: space-between;
    padding: 8% 11%;
  }

  @media screen and (min-width: 400px) {
    .homepage_user-card-wrapper {
      padding: 10% 12%;
    }
  }

  @media screen and (min-width: 500px) {
    .homepage_user-card-wrapper {
      padding: 8% 13%;
    }
  }

  .homepage_menu-card-logo {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 0.2px solid ${colors.main};
  }

  .homepage_row-wrapper {
    > div {
      &:last-child {
        border: none;
      }
    }
  }
`;

export default PageLoginStyles;
