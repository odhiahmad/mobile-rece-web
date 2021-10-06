import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import SuccessLogo from 'assets/img/success.png';
import FaqLogo from 'assets/img/faq.png';
import HelpLogo from 'assets/img/help.png';
import AboutLogo from 'assets/img/about.png';
import LogoutLogo from 'assets/img/logout.png';
import ChevronLogo from 'assets/img/right-chevron.png';
import Styles from './styles';
import { Link } from 'react-router-dom';
import { removeToken } from 'utils/cookie';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import useRouter from 'app/components/hooks/router';
// import Button from 'app/components/atoms/button/loadable';

export function PageProfile() {
  const router = useRouter();

  console.log(router);
  const body = document.body;
  body.style.backgroundColor = colors.black20;

  const [dataJwt, setDataJwt] = React.useState([]);

  React.useEffect(() => {
    getIndex();
  }, []);
  const getIndex = () => {
    try {
      const token = getToken();
      const decoded = jwt_decode<JwtPayload>(token || '') || null;
      const tempUser = decoded['account_id']['user'];

      setDataJwt(tempUser);
      console.log(tempUser);
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Halaman profile" />
      </Helmet>
      <TopBar />
      <Styles>
        <div className="profile screen">
          <div className="profile_display-card flex-column mb-1">
            <div className="bg-color-white100 text-center flex-column pt-2 pb-1-half pl-1-half pr-1-half">
              <span className="text-sub-title text-heavy mb-half">Profil</span>
              <div className="profile_photo mb-half">
                <img src={SuccessLogo} alt="User Logo" />
              </div>
              <span className="text-info text-heavy color-main pointer">
                <span
                  onClick={() => {
                    router.push({
                      pathname: '/profile-ubah',
                      state: {
                        dataJwtTemp: dataJwt,
                      },
                    });
                  }}
                >
                  Ubah Profil
                </span>
              </span>
              <span className="text-sub-title text-heavy mt-1-half">
                {dataJwt['Name']}
              </span>
              <span className="text-info">+{dataJwt['PhoneNumber']}</span>
            </div>
          </div>
          <div className="profile_menu bg-color-white100 mb-1 pl-1-half pr-1-half">
            <div className="flex flex-v-center flex-h-space main-border-bottom pt-1-half pb-1-half">
              <div className="flex flex-v-center">
                <img className="mr-half" src={FaqLogo} alt="Faq Logo" />
                <span>FAQs</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
            <div className="flex flex-v-center flex-h-space main-border-bottom pt-1-half pb-1-half">
              <div className="flex flex-v-center">
                <img className="mr-half" src={HelpLogo} alt="Faq Logo" />
                <span>Bantuan</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
            <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half">
              <div className="flex flex-v-center">
                <img className="mr-half" src={AboutLogo} alt="Faq Logo" />
                <span>Tentang Aplikasi</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
          </div>
          <div className="profile_logout bg-color-white100 mb-1 pl-1-half pr-1-half">
            <div
              onClick={() => {
                removeToken();
                window.location.href = '/';
              }}
              className="flex flex-v-center flex-h-space pt-1-half pb-1-half"
            >
              <div className="flex flex-v-center">
                <img className="mr-half" src={LogoutLogo} alt="Faq Logo" />
                <span>Log Out</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
          </div>
        </div>
      </Styles>
    </>
  );
}
