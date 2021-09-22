import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import welcomeImg from 'assets/img/login/welcome.png';
import PageLoginStyles from './styles';
import { H1Main } from 'styles/texts';
import FormLogin from 'app/components/organisms/form-login/loadable';
import useRouter from 'app/components/hooks/router';

export function PageLogin() {
  const router = useRouter();
  return (
    <>
      <Helmet>
        <title>Halaman Login</title>
        <meta name="description" content="Login page for RECE App" />
      </Helmet>
      <PageLoginStyles>
        <div className="pl-2 pr-2 pt-2 pb-2">
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
            Belum punya akun RECE? <a href={router.route.register}>Daftar</a>
          </span>
        </div>
      </PageLoginStyles>
    </>
  );
}
