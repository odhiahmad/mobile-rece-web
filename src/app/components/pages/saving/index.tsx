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
import { rpMasking } from 'utils/number';
import Styles from './styles';
import { transfer } from 'services/transfer';

const loginSchema = Yup.object().shape({
  nominal: Yup.string().required('Nominal tidak boleh kosong'),
});

const options = [
  {
    label: 'Dana',
    value: '1',
  },
  {
    label: 'Gopay',
    value: '2',
  },
  {
    label: 'Shopepay',
    value: '3',
  },
  {
    label: 'Ovo',
    value: '4',
  },
];

export function PageSaving() {
  const body = document.body;
  body.style.backgroundColor = colors.black20;

  const [loading, setLoading] = React.useState(false);
  const [layout, setLayout] = React.useState(0);

  const onSubmit = async values => {
    console.log(values.nominal);
    try {
      setLoading(true);
      await transfer({
        Balance: values.nominal,
        IdUser: '23',
      });

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
                  Tabung RECE
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
                    name="fund-source"
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
                      loading={loading}
                      className="w-100"
                      type="submit"
                    >
                      Tabung
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
                  <span className="text-jumbotron text-heavy mb-1">300897</span>
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
