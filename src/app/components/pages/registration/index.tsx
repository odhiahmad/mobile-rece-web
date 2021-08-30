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
    </>
  );
}
