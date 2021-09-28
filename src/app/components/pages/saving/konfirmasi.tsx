import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import Button from 'app/components/atoms/button/loadable';
import SuccessLogo from 'assets/img/success.png';
import PageSavingStyles from './styles';

export function PageSaving() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;

  return (
    <>
      <Helmet>
        <title>Konfirmasi</title>
        <meta name="description" content="Halaman nabung RECE" />
      </Helmet>
      <TopBar />
      <PageSavingStyles>
        <div className="saving screen">
          <div className="saving_success-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <div className="flex flex-h-center mb-2-half">
              <img src={SuccessLogo} alt="Success Logo" />
            </div>
            <div className="text-center flex-column">
              <span className="text-sub-title mb-1">Kode Transaksi:</span>
              <span className="text-jumbotron text-heavy mb-1">300897</span>
              <span className="color-main text-info text-heavy pointer">
                Salin Kode
              </span>
            </div>
          </div>
          <div className="saving_transaction-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <div className="mb-1-half">
              <span className="text-sub-title text-heavy mb-half">
                Detail Transaksi
              </span>
            </div>
            <div className="text-info pb-1 main-border-bottom">
              <div className="flex flex-v-center flex-h-space pt-half pb-half">
                <span>Jumlah Nabung</span>
                <span>Rp50.000</span>
              </div>
              <div className="flex flex-v-center flex-h-space pt-half pb-half">
                <span>Biaya Admin</span>
                <span>Rp0</span>
              </div>
            </div>
            <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
              <span>Total</span>
              <span>Rp50.000</span>
            </div>
          </div>
          <div className="saving_agreement-card flex bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <div className="checkbox mr-1">
              <label>
                <input type="checkbox" />
                <span className="checkbox-material">
                  <span className="check"></span>
                </span>
              </label>
            </div>
            <span className="text-info">
              Saya setuju dengan{' '}
              <a className="color-main" href="">
                syarat dan ketentuan
              </a>{' '}
              yang berlaku
            </span>
          </div>
          <div className="saving_confirmatioin bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <Button id="confirm-saving-button" className="w-100" type="button">
              Konfirmasi
            </Button>
          </div>
        </div>
      </PageSavingStyles>
    </>
  );
}
