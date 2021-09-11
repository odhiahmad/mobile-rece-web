import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Select from 'app/components/atoms/select-bottom-sheet/loadable';
import Button from 'app/components/atoms/button/loadable';
import SuccessLogo from 'assets/img/success.png';
import { rpMasking } from 'utils/number';
import Styles from './styles';

const withdrawOptions = [
  {
    label: '25000',
    value: 25000,
  },
  {
    label: '50000',
    value: 50000,
  },
  {
    label: '100000',
    value: 100000,
  },
  {
    label: '250000',
    value: 250000,
  },
  {
    label: '500000',
    value: 500000,
  },
  {
    label: '1000000',
    value: 1000000,
  },
  {
    label: '1500000',
    value: 1500000,
  },
  {
    label: '2000000',
    value: 2000000,
  },
];

export function PageWithdraw() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  return (
    <>
      <Helmet>
        <title>Tarik Dana RECE</title>
        <meta name="description" content="Halaman tarik dana RECE" />
      </Helmet>
      <TopBar />
      <Styles>
        <div className="withdraw screen">
          <div className="saving_input-card flex-column mb-1">
            <div className="bg-color-white100 flex-column pt-2 pl-1-half pr-1-half">
              <span className="text-sub-title text-heavy mb-half">
                Tarik RECE
              </span>
              <span className="text-info text-thin mb-1">
                Isi form berikut untuk melakukan penarikan RECE
              </span>
            </div>
            <div className="bg-color-white100 pl-1-half pr-1-half">
              <div className="mb-1">
                <span className="text-info text-thin">
                  Saldo RECE mu{' '}
                  <span className="color-main text-bold">Rp5.000.000</span>
                </span>
              </div>
              <InputNumber
                id="withdraw-nominal"
                name="nominal"
                label="Nominal"
              />
              <div className="flex flex-h-space flex-wrap">
                {withdrawOptions.map(opt => (
                  <div
                    key={opt.value}
                    className="withdraw_option w-46 border-box pointer text-bold mb-1 pt-1 pb-1 pl-1 pr-1"
                  >
                    {rpMasking(opt.label)}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-info">
                  <span className="text-heavy">Note: </span>
                  <span className="text-thin">
                    anda akan dikenakan biaya admin sebesar{' '}
                  </span>
                  <span className="text-heavy color-main">Rp 2.500</span>
                </span>
              </div>
              <div className="mt-2 pb-2">
                <Button id="withdraw-button" className="w-100" type="button">
                  Tarik
                </Button>
              </div>
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
      </Styles>
    </>
  );
}
