import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import SuccessLogo from 'assets/img/success.png';

import Styles from './styles';
import FormUbahProfile from 'app/components/organisms/form-ubah-profile/loadable';

export function PageUbahProfile() {
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
              <span className="text-sub-title text-heavy mb-half">
                Ubah Profil
              </span>
              <div className="profile_photo mb-half">
                <img src={SuccessLogo} alt="User Logo" />
              </div>
              <span className="text-info text-heavy color-main pointer"></span>
              <span className="text-sub-title text-heavy mt-1-half">
                Kurnia Ramadani
              </span>
              <span className="text-info">+62812-3456-7890</span>
            </div>
          </div>
          <div className="profile_display-card flex-column mb-1">
            <div className="bg-color-white100 flex-column pt-2 pb-1-half pl-1-half pr-1-half">
              <FormUbahProfile />
            </div>
          </div>
        </div>
      </Styles>
    </>
  );
}
