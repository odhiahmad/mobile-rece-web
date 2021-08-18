import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import FormRegister from 'app/components/organisms/form-register/loadable';
// import PageLoginStyles from './styles';
import { H1Main } from 'styles/texts';

export function PageRegistration() {
  return (
    <>
      <Helmet>
        <title>Registration Page</title>
        <meta name="description" content="Registration page for RECE App" />
      </Helmet>
      <div className="pl-2 pr-2 pt-2 pb-2">
        <div className="pb-2">
          <H1Main>Yuk Daftar!</H1Main>
          <span>Daftarkan diri kamu untuk mulai menggunakan RECE</span>
        </div>
        <FormRegister />
      </div>
      {/* <PageLoginStyles>
        <div className="pl-24 pr-24 pt-24 pb-24">
          <div className="flex-center pb-1">
            <img src={welcomeImg} alt="Welcome" />
          </div>
          <div className="mb-2">
            <H1Main>
              Hi! <br />
              Selamat Datang
            </H1Main>
            <span>
              Masuk menggunakan username dan password kamu untuk mulai
              menggunakan RECE
            </span>
          </div>
          <FormLogin />
          <span>
            Belum punya akun RECE? <a href="/">Daftar</a>
          </span>
        </div>
      </PageLoginStyles> */}
    </>
  );
}
