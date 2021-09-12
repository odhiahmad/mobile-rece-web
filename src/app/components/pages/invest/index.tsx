import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Input from 'app/components/atoms/input/loadable';
import Select from 'app/components/atoms/select-bottom-sheet/loadable';
import Button from 'app/components/atoms/button/loadable';
import SuccessLogo from 'assets/img/success.png';
import Styles from './styles';

export function PageInvest() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  return (
    <>
      <Helmet>
        <title>Investasi Emas RECE</title>
        <meta name="description" content="Halaman investasi emas RECE" />
      </Helmet>
      <TopBar />
      <Styles>
        <div className="invest screen">
          <div className="invest_current-gold-card flex-column mb-1">
            <div className="bg-color-white100 flex-column pt-2 pl-1-half pr-1-half">
              <span className="text-sub-title text-heavy mb-half">
                Investasi Emas
              </span>
              <span className="text-info text-thin mb-2">
                Berikut jumlah investasi emas kamu:
              </span>
            </div>
            <div className="bg-color-white100 pl-1-half pr-1-half">
              <Input
                id="current-gold"
                name="current-gold"
                label="Emas Kamu Saat Ini"
              />
            </div>
          </div>
          <div className="invest_current-gold-card flex-column mb-1">
            <div className="bg-color-white100 flex-column pt-2 pl-1-half pr-1-half">
              <span className="text-sub-title text-heavy mb-half">
                Beli Emas
              </span>
              <span className="text-info text-thin mb-2">
                Isi form berikut untuk membeli emas
              </span>
            </div>
            <div className="bg-color-white100 pl-1-half pr-1-half">
              <InputNumber
                id="invest-nominal"
                name="nominal"
                label="Jumlah dalam Rupiah"
              />
              <Input
                id="invest-weight"
                name="weight"
                label="Jumlah dalam gram"
              />
              <Select
                id="invest-fund-source"
                name="fund-source"
                label="Sumber Dana"
              />
            </div>
          </div>
          <div className="invest_buy bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <Button id="confirm-buy" className="w-100" type="button">
              Beli Emas
            </Button>
          </div>
          <div className="invest_success-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
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
          <div className="invest_transaction-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
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
          <div className="invest_agreement-card flex bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
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
          <div className="invest_confirmation bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
            <Button id="confirm-invest-button" className="w-100" type="button">
              Konfirmasi
            </Button>
          </div>
        </div>
      </Styles>
    </>
  );
}
