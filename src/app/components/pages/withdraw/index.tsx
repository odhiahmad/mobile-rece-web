import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Button from 'app/components/atoms/button/loadable';
import Select from 'app/components/atoms/select-bottom-sheet/loadable';
import SuccessLogo from 'assets/img/success.png';
import { rpMasking } from 'utils/number';
import Styles from './styles';
import { transfer } from 'services/transfer';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';
const loginSchema = Yup.object().shape({
  nominal: Yup.string().required('Nominal tidak boleh kosong'),
});

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

const options = [
  {
    label: 'Dana',
    value: 'c5f0978f-cf06-4aa9-940e-837e7d5eb1cc',
  },
  {
    label: 'Gopay',
    value: '78727daf-876c-4fee-a758-e96dacff5307',
  },
  {
    label: 'Link Aja',
    value: 'f9109271-c0c9-47bd-98a5-ba8d02f9c54a',
  },
  {
    label: 'Alfamart',
    value: 'db92eb1b-6304-4a91-b1f4-4522815145ce',
  },
];

export function PageWithdraw() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;

  const [loading, setLoading] = React.useState(false);
  const [layout, setLayout] = React.useState(0);
  const [dataJwt, setDataJwt] = React.useState([]);
  const [dataRes, setDataRes] = React.useState([]);

  React.useEffect(() => {
    getIndex();
  }, []);
  const getIndex = () => {
    try {
      setLoading(true);
      const token = getToken();
      const decoded = jwt_decode<JwtPayload>(token || '') || null;
      const tempUser = decoded['account_id']['Wallet'];

      setDataJwt(tempUser);
      console.log(tempUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onSubmit = async values => {
    console.log(values.nominal);
    try {
      setLoading(true);
      const dataResTemp = await transfer({
        Amount: parseInt(values.nominal),
        IdUser: dataJwt['wallet_id'],
        UserMerchantId: values.fundSource,
      });

      setDataRes(dataResTemp);

      if (dataResTemp.status === 200) {
        setLayout(1);
      }
      console.log(dataRes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      nominal: '',
      fundSource: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      onSubmit(values);
    },
  });

  const pilihNominal = value => {
    formik.setFieldValue('nominal', value);
  };
  return (
    <>
      <Helmet>
        <title>Tarik Dana RECE</title>
        <meta name="description" content="Halaman tarik dana RECE" />
      </Helmet>
      <TopBar />
      <Styles>
        <div className="withdraw screen">
          {layout === 0 ? (
            <div className="withdraw_input-card flex-column mb-1">
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
                <form onSubmit={formik.handleSubmit}>
                  <InputNumber
                    id="withdraw-nominal"
                    name="nominal"
                    label="Nominal"
                    placeholder="Nominal"
                    value={formik.values.nominal}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nominal !== undefined &&
                      formik.touched.nominal
                    }
                    errorMsg={formik.errors.nominal}
                  />
                  <Select
                    id="saving-fund-source"
                    name="fundSource"
                    label="Sumber Dana"
                    options={options}
                    value={formik.values.fundSource}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.fundSource !== undefined &&
                      formik.touched.fundSource
                    }
                    errorMsg={formik.errors.fundSource}
                  />
                  {/* <div className="flex flex-h-space flex-wrap">
                    {withdrawOptions.map(opt => (
                      <div
                        onClick={() => pilihNominal(opt.label)}
                        key={opt.value}
                        className="withdraw_option w-46 border-box pointer text-bold mb-1 pt-1 pb-1 pl-1 pr-1"
                      >
                        {rpMasking(opt.label)}
                      </div>
                    ))}
                  </div> */}

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
                    <Button
                      id="withdraw-button"
                      loading={loading}
                      className="w-100"
                      type="submit"
                    >
                      Tarik
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className="withdraw_success-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                <div className="flex flex-h-center mb-2-half">
                  <img src={SuccessLogo} alt="Success Logo" />
                </div>
                <div className="text-center flex-column">
                  <span className="text-sub-title mb-1">Kode Transaksi:</span>
                  <span className="text-jumbotron text-heavy mb-1">
                    {dataRes['Data']['CodeTransaction']}
                  </span>
                  <span className="color-main text-info text-heavy pointer">
                    Salin Kode
                  </span>
                </div>
              </div>
              <div className="withdraw_transaction-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                <div className="mb-1-half">
                  <span className="text-sub-title text-heavy mb-half">
                    Detail Transaksi
                  </span>
                </div>
                <div className="text-info pb-1 main-border-bottom">
                  <div className="flex flex-v-center flex-h-space pt-half pb-half">
                    <span>Jumlah Nabung</span>
                    <span>{rpMasking(dataRes['Data']['Amount'])}</span>
                  </div>
                  <div className="flex flex-v-center flex-h-space pt-half pb-half">
                    <span>Biaya Admin</span>
                    <span>{rpMasking(dataRes['Data']['AdminFee'])}</span>
                  </div>
                </div>
                <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
                  <span>Total</span>
                  <span>{rpMasking(dataRes['Data']['Total'])}</span>
                </div>
              </div>
              <div className="withdraw_agreement-card flex bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
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
              <div className="withdraw_confirmatioin bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                <Button
                  id="confirm-saving-button"
                  className="w-100"
                  type="button"
                >
                  Konfirmasi
                </Button>
              </div>
            </div>
          )}
        </div>
      </Styles>
    </>
  );
}
