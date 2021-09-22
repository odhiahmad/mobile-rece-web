import * as React from 'react';
import Styles from './styles';
import { Link } from 'react-router-dom';
import useRouter from 'app/components/hooks/router';
import HomeLogo from 'assets/img/home.png';
import UserLogo from 'assets/img/login/user.png';

export function BottomBar() {
  const router = useRouter();
  return (
    <>
      <Styles>
        <div className="bottombar pb-1 pt-1 pr-2-half pl-2-half bg-color-white100 flex flex-h-space flex-v-center">
          <div className="flex-column flex-v-center">
            <Link to={router.route.home}>
              <img src={HomeLogo} alt="home" />
            </Link>
            <span className="text-info-small text-thin">Beranda</span>
          </div>
          <div className="bottombar_saving bg-color-main">
            <Link to={router.route.saving}>
              <span className="color-white100 text-heavy">TABUNG RECE</span>
            </Link>
          </div>
          <div className="flex-column flex-v-center">
            <Link to={router.route.profile}>
              <img src={UserLogo} alt="home" />
            </Link>
            <span className="text-info-small text-thin">Profil</span>
          </div>
        </div>
      </Styles>
    </>
  );
}
