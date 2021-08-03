import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import welcomeImg from 'assets/img/login/welcome.png';
import PageLoginStyles from './styles';
import { H1Main } from 'styles/texts';
import FormLogin from 'app/components/organisms/form-login/loadable';

export function PageLogin() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login page for RECE App" />
      </Helmet>
      <PageLoginStyles>
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
      </PageLoginStyles>
    </>
  );
}
