import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import BellLogo from 'assets/img/bell.png';
import ReceLogo from 'assets/img/rece-white.png';
import CardChipLogo from 'assets/img/card-chip.png';
import TransferLogo from 'assets/img/transfer.png';
import AtmLogo from 'assets/img/atm.png';
import InvestasiLogo from 'assets/img/investasi.png';
import InvoiceLogo from 'assets/img/invoice.png';
import { colors } from 'styles/variables';
import PageHomeStyles from './styles';
import useRouter from 'app/components/hooks/router';
import BottomBar from 'app/components/atoms/bottombar/loadable';
import Skeleton from 'react-loading-skeleton';
import { rpMasking } from 'utils/number';
import { wallet } from 'services/wallet';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

const dataRiwayat = [
  {
    id: 0,
    nominal: 5300,
    waktu: '12-02-2008',
    fundSource: 'Tokopedia',
  },
  {
    id: 1,
    nominal: 3000,
    waktu: '12-02-2008',
    fundSource: 'Dana',
  },
  {
    id: 2,
    nominal: 5000,
    waktu: '12-02-2008',
    fundSource: 'Shopepay',
  },
];
export function PageHome() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [dataJwt, setDataJwt] = React.useState([]);
  const [dataWallet, setDataWallet] = React.useState([]);

  React.useEffect(() => {
    getIndex();
  }, []);
  const getIndex = async () => {
    try {
      setLoading(true);
      const token = getToken();
      const decoded = jwt_decode<JwtPayload>(token || '') || null;
      const tempUser = decoded['account_id']['user'];
      const tempUserRR = decoded['account_id'];
      setDataJwt(tempUser);
      const walletTemp = await wallet({
        walletId: tempUserRR['Wallet']['wallet_id'],
      });

      console.log(walletTemp);
      setDataWallet(walletTemp['Data']);

      // for (let i = walletTemp['Data']['wallet_history'].length; i > 0; i--) {
      //   console.log(walletTemp['Data']['wallet_history'][i]);
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
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
                {loading === true ? (
                  <Skeleton height={10} />
                ) : (
                  <span className="text-sub-title text-heavy mb-half">
                    {dataJwt['Name']}
                  </span>
                )}

                <span className="text-info text-thin">
                  Selamat datang kembali!
                </span>
              </div>
              <div>
                <img src={BellLogo} alt="Bell" />
              </div>
            </div>
            {/* [NOTE] CAN BE SPLIT INTO SMALLER COMPONENT */}
            <div className="homepage_user-card">
              <div className="homepage_user-card-wrapper flex-column flex-h-space">
                <div className="flex flex-h-space flex-v-center">
                  <div className="color-white100 flex-column">
                    <span className="text-info-small">Saldo Tabungan</span>
                    {loading === true ? (
                      <Skeleton height={20} />
                    ) : (
                      <span className="text-title text-heavy">
                        {rpMasking(dataWallet['Balance'])}
                      </span>
                    )}
                  </div>
                  <img className="homepage_rece" src={ReceLogo} alt="Rece" />
                </div>
                <div className="flex flex-h-space flex-v-center">
                  <div className="color-white100 flex-column">
                    {loading === true ? (
                      <Skeleton height={20} />
                    ) : (
                      <span className="text-sub-title">
                        0012 - 0812 - 3456 - 7890
                      </span>
                    )}
                    <span className="text-info-small"> {dataJwt['Name']}</span>
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
                  <Link to={router.route.transfer}>
                    <img src={TransferLogo} alt="Transfer" />
                  </Link>
                </div>
                <span className="text-info">Transfer</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <Link to={router.route.withdraw}>
                    <img src={AtmLogo} alt="Tarik" />
                  </Link>
                </div>
                <span className="text-info">Tarik</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <Link to={router.route.invest}>
                    <img src={InvestasiLogo} alt="Investasi" />
                  </Link>
                </div>
                <span className="text-info">Investasi</span>
              </div>
              <div className="flex-column flex-v-center pointer">
                <div className="homepage_menu-card-logo flex flex-v-center flex-h-center mb-half">
                  <Link to={router.route.bill}>
                    <img src={InvoiceLogo} alt="Tagihan" />
                  </Link>
                </div>
                <span className="text-info">Tagihan</span>
              </div>
            </div>
          </div>
          {/* [NOTE] CAN BE SPLIT INTO SMALLER COMPONENT */}
          <div className="homepage_bottom-card border-radius-big pl-1-half pt-1-half pr-1-half pb-1-half bg-color-white100">
            <div className="mb-1">
              <span className="text-sub-title text-heavy">
                Riwayat Transaksi
              </span>
            </div>
            {loading === true ? (
              dataRiwayat.map(opt => (
                <div className="main-border-bottom">
                  <Skeleton height={50} />
                </div>
              ))
            ) : (
              <div className="homepage_row-wrapper">
                {/* {dataWallet['wallet_history'].map(opt => (
                  <div className="flex flex-v-center flex-h-space pt-1-half pb-1-half main-border-bottom">
                    <div className="flex-column">
                      <span className="text-info text-bold">Transfer RECE</span>
                      <span className="text-info-small text-thin">
                        Melalui Tokopedia
                      </span>
                    </div>
                    <div className="flex-column">
                      <span className="text-info text-bold color-main text-end">
                        {rpMasking(opt.nominal)}
                      </span>
                      <span className="text-info-small text-thin text-end">
                        Hari ini, {opt.waktu}
                      </span>
                    </div>
                  </div>
                ))} */}
              </div>
            )}
          </div>
          <BottomBar />
        </div>
      </PageHomeStyles>
    </>
  );
}
