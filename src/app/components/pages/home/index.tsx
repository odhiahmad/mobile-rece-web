import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import BellLogo from 'assets/img/bell.png';
import ReceLogo from 'assets/img/rece-white.png';
import CardChipLogo from 'assets/img/card-chip.png';
import TransferLogo from 'assets/img/transfer.png';
import AtmLogo from 'assets/img/atm.png';
import InvestasiLogo from 'assets/img/investasi.png';
import InvoiceLogo from 'assets/img/invoice.png';
import { colors } from 'styles/variables';
import PageHomeStyles from './styles';

export function PageHome() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page for RECE App" />
      </Helmet>
      <PageHomeStyles>
        <div className="homepage screen">
          <div className="homepage_top-card relative bg-color-white100 pt-1-half pr-1-half pl-1-half border-radius-main">
            <div className="flex pb-1-half">
              <div className="flex-column flex-full pr-1-half">
                <span className="text-sub-title text-heavy mb-half">
                  Halo Kurnia!
                </span>
                <span className="text-info text-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dipiscing .
                </span>
              </div>
              <div>
                <img src={BellLogo} alt="Bell" />
              </div>
            </div>
            <div className="homepage_user-card">
              <div className="homepage_user-card-wrapper flex-column flex-h-space">
                <div className="flex flex-h-space flex-v-center">
                  <div className="color-white100 flex-column">
                    <span className="text-info-small">Saldo Tabungan</span>
                    <span className="text-title text-heavy">Rp 5.750.0000</span>
                  </div>
                  <img className="homepage_rece" src={ReceLogo} alt="Rece" />
                </div>
                <div className="flex flex-h-space flex-v-center">
                  <div className="color-white100 flex-column">
                    <span className="text-sub-title">
                      0012 - 0812 - 3456 - 7890
                    </span>
                    <span className="text-info-small">Kurnia Ramadhani</span>
                  </div>
                  <img
                    className="homepage_rece"
                    src={CardChipLogo}
                    alt="Card Chip"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="homepage_menu-card pl-1-half pr-1-half mb-1-half">
            <div className="flex flex-h-space flex-v-center border-radius-main bg-color-white100 pl-1 pt-1 pr-1 pb-1">
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <img src={TransferLogo} alt="Transfer" />
                </div>
                <span className="text-info">Transfer</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <img src={AtmLogo} alt="Tarik" />
                </div>
                <span className="text-info">Tarik</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <img src={InvestasiLogo} alt="Investasi" />
                </div>
                <span className="text-info">Investasi</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <img src={InvoiceLogo} alt="Tagihan" />
                </div>
                <span className="text-info">Tagihan</span>
              </div>
            </div>
          </div>
          <div className="homepage_bottom-card border-radius-big pl-1-half pt-1-half pr-1-half pb-1-half bg-color-white100">
            <div className="mb-1">
              <span className="text-sub-title text-heavy">
                Riwayat Transaksi
              </span>
            </div>
            <div className="homepage_row-wrapper">
              <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half main-border-bottom">
                <div className="flex-column">
                  <span className="text-info text-bold">Transfer RECE</span>
                  <span className="text-info-small text-thin">
                    Melalui Tokopedia
                  </span>
                </div>
                <div className="flex-column">
                  <span className="text-info text-bold color-main text-end">
                    Rp 12.000
                  </span>
                  <span className="text-info-small text-thin text-end">
                    Hari ini, 12:30
                  </span>
                </div>
              </div>
              <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half main-border-bottom">
                <div className="flex-column">
                  <span className="text-info text-bold">Transfer RECE</span>
                  <span className="text-info-small text-thin">
                    Melalui Tokopedia
                  </span>
                </div>
                <div className="flex-column">
                  <span className="text-info text-bold color-main text-end">
                    Rp 12.000
                  </span>
                  <span className="text-info-small text-thin text-end">
                    Hari ini, 12:30
                  </span>
                </div>
              </div>
              <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half main-border-bottom">
                <div className="flex-column">
                  <span className="text-info text-bold">Transfer RECE</span>
                  <span className="text-info-small text-thin">
                    Melalui Tokopedia
                  </span>
                </div>
                <div className="flex-column">
                  <span className="text-info text-bold color-main text-end">
                    Rp 12.000
                  </span>
                  <span className="text-info-small text-thin text-end">
                    Hari ini, 12:30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageHomeStyles>
    </>
  );
}
