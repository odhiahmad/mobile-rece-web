import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Helmet } from 'react-helmet-async';
import { colors } from 'styles/variables';
import TopBar from 'app/components/atoms/topbar/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Select from 'app/components/atoms/select-bottom-sheet/loadable';
import Button from 'app/components/atoms/button/loadable';
import SuccessLogo from 'assets/img/success.png';
import Styles from './styles';
import { saving } from 'services/saving';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { rpMasking } from 'utils/number';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useRouter from 'app/components/hooks/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = Yup.object().shape({
  nominal: Yup.string().required('Nominal tidak boleh kosong'),
});

const options = [
  {
    label: 'Dana',
    value: '5715a88c-82ee-4f95-8e70-5434a2ee2bb1 ',
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

export function PageSaving() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;
  const router = useRouter();
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
      const dataResTemp = await saving({
        Amount: parseInt(values.nominal),
        UserMerchantId: values.fundSource,
        IdUser: dataJwt['wallet_id'],
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
      fundSource: '',
      cekBox: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log(layout);
      if (layout === 0) {
        onNext();
      } else if (layout === 1) {
        onSubmit(values);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Tarik Dana RECE</title>
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
                  Tabung RECE
                </span>
                <span className="text-info text-thin mb-1">
                  Isi form berikut untuk melakukan penabungan RECE
                </span>
              </div>
              <div className="bg-color-white100 pl-1-half pr-1-half">
                <form onSubmit={formik.handleSubmit}>
                  <InputNumber
                    id="saving-nominal"
                    name="nominal"
                    label="Nominal"
                    masking="none"
                    colorScheme="grey"
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
                  <div className="mt-2 pb-2">
                    <Button
                      id="withdraw-button"
                      className="w-100"
                      type="submit"
                    >
                      Tabung
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : layout === 1 ? (
            <div className="withdraw_input-card flex-column mb-1">
              <div className="bg-color-white100 flex-column pt-2 pl-1-half pr-1-half">
                <span className="text-sub-title text-heavy mb-half">
                  Konfirmasi
                </span>
              </div>
              <div className="bg-color-white100 pl-1-half pr-1-half">
                <form onSubmit={formik.handleSubmit}>
                  <InputNumber
                    id="saving-nominal"
                    name="nominal"
                    label="Nominal"
                    colorScheme="grey"
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

                  <div className="withdraw_transaction-card bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                    <div className="mb-1-half">
                      <span className="text-sub-title text-heavy mb-half">
                        Detail Transaksi
                      </span>
                    </div>
                    <div className="text-info pb-1 main-border-bottom">
                      <div className="flex flex-v-center flex-h-space pt-half pb-half">
                        <span>Jumlah Nabung</span>
                        <span>{rpMasking(formik.values.nominal)}</span>
                      </div>
                      <div className="flex flex-v-center flex-h-space pt-half pb-half">
                        <span>Biaya Admin</span>
                        <span>Rp0</span>
                      </div>
                    </div>
                    <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
                      <span>Total</span>
                      <span>{rpMasking(formik.values.nominal)}</span>
                    </div>
                  </div>
                  <div className="withdraw_agreement-card flex bg-color-white100 mb-1 pt-1-half pb-1-half pl-1-half pr-1-half">
                    <div className="checkbox mr-1">
                      <label>
                        <input type="checkbox" name="cekBox" />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>
                      </label>
                    </div>
                    <span className="text-info">
                      Saya setuju dengan syarat dan ketentuan yang berlaku
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
                    <span>Jumlah Nabung</span>
                    <span>{rpMasking(formik.values.nominal)}</span>
                  </div>
                  <div className="flex flex-v-center flex-h-space pt-half pb-half">
                    <span>Biaya Admin</span>
                    <span>Rp0</span>
                  </div>
                </div>
                <div className="flex flex-v-center flex-h-space pt-2 pb-half text-bold">
                  <span>Total</span>
                  <span>{rpMasking(formik.values.nominal)}</span>
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
