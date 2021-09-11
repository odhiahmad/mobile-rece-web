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

export function PageProfile() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
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
                Ubah Foto
              </span>
              <span className="text-sub-title text-heavy mt-1-half">
                Kurnia Ramadani
              </span>
              <span className="text-info">+62812-3456-7890</span>
            </div>
          </div>
          <div className="profile_menu bg-color-white100 mb-1 pl-1-half pr-1-half">
            <div className="flex flex-v-center flex-h-space main-border-bottom pt-1-half pb-1-half">
              <div>
                <img className="mr-half" src={FaqLogo} alt="Faq Logo" />
                <span>FAQs</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
            <div className="flex flex-v-center flex-h-space main-border-bottom pt-1-half pb-1-half">
              <div>
                <img className="mr-half" src={HelpLogo} alt="Faq Logo" />
                <span>Bantuan</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
            <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half">
              <div>
                <img className="mr-half" src={AboutLogo} alt="Faq Logo" />
                <span>Tentang Aplikasi</span>
              </div>
              <img src={ChevronLogo} alt="Right Chevron" />
            </div>
          </div>
          <div className="profile_logout bg-color-white100 mb-1 pl-1-half pr-1-half">
            <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half">
              <div>
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
