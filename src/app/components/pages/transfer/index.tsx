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
import Input from 'app/components/atoms/input/loadable';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { transfer } from 'services/transfer';
import { wallet } from 'services/wallet';
import Skeleton from 'react-loading-skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useRouter from 'app/components/hooks/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = Yup.object().shape({
  nominal: Yup.string().required('Nominal tidak boleh kosong'),
  nomorTujuan: Yup.string().required('Nomor Tujuan tidak boleh kosong'),
  nama: Yup.string().required('Nama tidak boleh kosong'),
  fundSource: Yup.string().required('Tujuan Penarikan tidak boleh kosong'),
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
    value: '5715a88c-82ee-4f95-8e70-5434a2ee2bb1',
  },
  {
    label: 'Gopay',
    value: '3baecaeb-1fa1-4d79-8eac-c22f3418f6ed',
  },
  {
    label: 'Link Aja',
    value: 'f50a20f9-1b51-4013-8a34-ccd2b1055885',
  },
  {
    label: 'Alfamart',
    value: 'db92eb1b-6304-4a91-b1f4-4522815145ce',
  },
  {
    label: 'Ovo',
    value: '2aff3127-b59d-4823-a644-74a1e1e0127b',
  },
];

export function PageTransfer() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [layout, setLayout] = React.useState(0);
  const [dataJwt, setDataJwt] = React.useState([]);
  const [dataRes, setDataRes] = React.useState([]);
  const [dataUser, setDataUser] = React.useState([]);
  const [loadingSkel, setLoadingSkel] = React.useState(false);
  const [balance, setBalance] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState('');
  React.useEffect(() => {
    getIndex();
  }, []);
  const getIndex = async () => {
    try {
      setLoadingSkel(true);
      const token = getToken();
      const decoded = jwt_decode<JwtPayload>(token || '') || null;
      const tempWallet = decoded['account_id']['Wallet'];
      const tempUser = decoded['account_id']['user'];
      const walletTemp = await wallet({
        walletId: tempWallet['wallet_id'],
      });
      setBalance(walletTemp['Data']['Balance']);

      setDataJwt(tempWallet);
      setDataUser(tempUser);
      setLoadingSkel(false);
    } catch (error) {
      setLoadingSkel(false);
    }
  };

  const onSubmit = async values => {
    try {
      setLoading(true);
      const dataResTemp = await transfer({
        Amount: parseInt(values.nominal),
        IdUser: dataJwt['wallet_id'],
        PhoneNumber: dataUser['PhoneNumber'],
        UserMerchantId: values.fundSource,
        Name: values.nama,
        NomorTujuan: values.nomorTujuan,
      });

      setDataRes(dataResTemp);
      if (dataResTemp.status === 200) {
        setLayout(2);
        toast.success('Transaksi Berhasil', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      if (dataResTemp.errorId === 400) {
        setLayout(1);
        toast.error(dataResTemp.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onNext = () => {
    setLayout(1);
  };

  const formik = useFormik({
    initialValues: {
      nominal: '',
      nomorTujuan: '',
      nama: '',
      fundSource: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      if (layout === 0) {
        onNext();
      } else if (layout === 1) {
        onSubmit(values);
      }
    },
  });

  const pilihNominal = value => {
    formik.setFieldValue('nominal', value);
  };
  return (
    <>
      <Helmet>
        <title>Transfer Dana RECE</title>
        <meta name="description" content="Halaman tarik dana RECE" />
      </Helmet>
      <TopBar />
      <Styles>
        <div className="withdraw screen">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {layout === 0 ? (
            <div className="withdraw_input-card flex-column mb-1">
              <div className="bg-color-white100 flex-column pt-2 pl-1-half pr-1-half">
                <span className="text-sub-title text-heavy mb-half">
                  Transfer RECE
                </span>
                <span className="text-info text-thin mb-1">
                  Isi form berikut untuk melakukan transfer RECE
                </span>
              </div>
              <div className="bg-color-white100 pl-1-half pr-1-half">
                <div className="mb-1">
                  <span className="text-info text-thin">
                    Saldo RECE mu{' '}
                    {loadingSkel === true ? (
                      <span className="color-main text-bold">
                        <Skeleton height={10} />
                      </span>
                    ) : (
                      <span className="color-main text-bold">
                        {rpMasking(balance)}
                      </span>
                    )}
                  </span>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <Select
                    id="saving-fund-source"
                    name="fundSource"
                    label="Transfer Ke Mana?"
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
                  <InputNumber
                    id="withdraw-nominal"
                    name="nomorTujuan"
                    masking="none"
                    label="Nomor Tujuan"
                    placeholder="Nomor Tujuan"
                    value={formik.values.nomorTujuan}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nomorTujuan !== undefined &&
                      formik.touched.nomorTujuan
                    }
                    errorMsg={formik.errors.nomorTujuan}
                  />
                  <Input
                    id="name-input"
                    name="nama"
                    placeholder="Nama"
                    label="Nama"
                    value={formik.values.nama}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nama !== undefined && formik.touched.nama
                    }
                    errorMsg={formik.errors.nama}
                  />
                  <InputNumber
                    id="withdraw-nominal"
                    name="nominal"
                    masking="none"
                    label="Jumlah Transfer"
                    placeholder="Jumlah Transfer"
                    value={formik.values.nominal}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nominal !== undefined &&
                      formik.touched.nominal
                    }
                    errorMsg={formik.errors.nominal}
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
                      Transfer
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : layout === 1 ? (
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="withdraw_transaction-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                  <div className="mb-1-half">
                    <span className="text-sub-title text-heavy mb-half">
                      Detail Transaksi
                    </span>
                  </div>
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
                  <InputNumber
                    id="withdraw-nominal"
                    name="nomorTujuan"
                    masking="none"
                    label="Nomor Tujuan"
                    placeholder="Nomor Tujuan"
                    value={formik.values.nomorTujuan}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nomorTujuan !== undefined &&
                      formik.touched.nomorTujuan
                    }
                    errorMsg={formik.errors.nomorTujuan}
                  />
                  <Input
                    id="name-input"
                    name="nama"
                    placeholder="Nama"
                    label="Nama"
                    value={formik.values.nama}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.nama !== undefined && formik.touched.nama
                    }
                    errorMsg={formik.errors.nama}
                  />
                  <InputNumber
                    id="withdraw-nominal"
                    name="nominal"
                    masking="none"
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

                  <div className="text-info pb-1 main-border-bottom">
                    <div className="flex flex-v-center flex-h-space pt-half pb-half">
                      <span>Jumlah Transfer</span>
                      <span>{rpMasking(formik.values.nominal)}</span>
                    </div>
                    <div className="flex flex-v-center flex-h-space pt-half pb-half">
                      <span>Biaya Admin</span>
                      <span>Rp 0</span>
                    </div>
                  </div>
                  <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
                    <span>Total</span>
                    <span>
                      {rpMasking(parseInt(formik.values.nominal) + 2500)}
                    </span>
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
                    type="submit"
                    loading={loading}
                  >
                    Konfirmasi
                  </Button>
                </div>
              </form>
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
                    {dataRes['Data']['TransactionCode']}
                  </span>
                  <CopyToClipboard
                    text={dataRes['Data']['TransactionCode']}
                    onCopy={() => {}}
                    options={{
                      debug: true,
                      message: 'message',
                      format: 'text/plain',
                    }}
                  >
                    <span className="color-main text-info text-heavy pointer">
                      Salin Kode
                    </span>
                  </CopyToClipboard>
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
                    <span>Jumlah Transfer</span>
                    <span>{rpMasking(formik.values.nominal)}</span>
                  </div>
                  <div className="flex flex-v-center flex-h-space pt-half pb-half">
                    <span>Biaya Admin</span>
                    <span>Rp 0</span>
                  </div>
                </div>
                <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
                  <span>Total</span>
                  <span>{rpMasking(dataRes['Data']['Total'])}</span>
                </div>
              </div>

              <div className="withdraw_confirmatioin bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                <Button
                  onClick={() => {
                    router.push({
                      pathname: '/',
                      state: {
                        dataJwtTemp: dataJwt,
                      },
                    });
                  }}
                  id="confirm-saving-button"
                  className="w-100"
                  type="button"
                >
                  Selesai
                </Button>
              </div>
            </div>
          )}
        </div>
      </Styles>
    </>
  );
}
