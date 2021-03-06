import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'app/components/atoms/input/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Button from 'app/components/atoms/button/loadable';
import userLogo from 'assets/img/login/user.png';
import lockLogo from 'assets/img/login/lock.png';
import ktpLogo from 'assets/img/id-card.png';
import phoneLogo from 'assets/img/phone.png';
import calendarLogo from 'assets/img/calendar.png';
import { registerUser } from 'services/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  email: Yup.string()
    .email('Format email salah')
    .required('Email tidak boleh kosong'),
  ktp: Yup.string()
    .typeError('KTP tidak boleh kosong')
    .required('KTP tidak boleh kosong'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Nomor handphone tidak valid')
    .typeError('Nomor handphone tidak boleh kosong')
    .required('Nomor handphone tidak boleh kosong'),
  mother: Yup.string().required('Nama ibu kandung tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
  confirmPassword: Yup.string().required(
    'Konfirmasi password tidak boleh kosong',
  ),
});

export function FormRegister() {
  const [loading, setLoading] = React.useState(false);
  const [berhasil, setBerhasil] = React.useState(0);
  const history = useHistory();
  const onSubmit = async values => {
    try {
      setLoading(true);
      const response = await registerUser({
        Name: values.name,
        Username: values.email,
        Nik: values.ktp,
        PhoneNumber: parseInt(values.phone),
        Email: values.email,
        BirthPlace: 'Padang',
        BirthDate: '2020-02-02',
        MotherName: values.mother,
        Password: values.password,
        BankAccount: 32432423,
      });

      if (response.errorId === 409) {
        toast.error('Email atau NIK atau Nomor HP sudah pernah digunakan', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        history.push({
          pathname: '/otp',
          state: {
            email: values.email,
          },
        });
      }

      cookies.set('email', response.Data.Email);
      cookies.set('userId', response.Data.ID);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      ktp: '',
      phone: '62',
      mother: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      if (values.password !== values.confirmPassword) {
        formik.setErrors({
          confirmPassword: 'Konfimasi password harus sama dengan password',
        });
      } else {
        onSubmit(values);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <div className="mb-3">
        <Input
          id="name-input"
          name="name"
          logo={userLogo}
          colorScheme="grey"
          placeholder="Nama Sesuai KTP"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name !== undefined && formik.touched.name}
          errorMsg={formik.errors.name}
        />
        <Input
          id="email-input"
          name="email"
          logo={userLogo}
          colorScheme="grey"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email !== undefined && formik.touched.email}
          errorMsg={formik.errors.email}
        />
        <InputNumber
          id="ktp-input"
          name="ktp"
          logo={ktpLogo}
          colorScheme="grey"
          masking="none"
          placeholder="Nomor KTP"
          value={formik.values.ktp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.ktp !== undefined && formik.touched.ktp}
          errorMsg={formik.errors.ktp}
        />
        <InputNumber
          id="phone-input"
          name="phone"
          logo={phoneLogo}
          colorScheme="grey"
          masking="none"
          placeholder="Gunakan (62)"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone !== undefined && formik.touched.phone}
          errorMsg={formik.errors.phone}
        />

        <Input
          id="mother-input"
          name="mother"
          logo={userLogo}
          colorScheme="grey"
          placeholder="Nama Ibu Kandung"
          value={formik.values.mother}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.mother !== undefined && formik.touched.mother}
          errorMsg={formik.errors.mother}
        />
        <Input
          id="password-input"
          name="password"
          logo={lockLogo}
          type="password"
          colorScheme="grey"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.password !== undefined && formik.touched.password
          }
          errorMsg={formik.errors.password}
        />
        <Input
          id="confirm-password-input"
          name="confirmPassword"
          logo={lockLogo}
          type="password"
          colorScheme="grey"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.confirmPassword !== undefined &&
            formik.touched.confirmPassword
          }
          errorMsg={formik.errors.confirmPassword}
        />
      </div>
      <Button
        id="register-submit"
        type="submit"
        fullWidth
        loading={loading}
        className="mb-1"
      >
        MASUK
      </Button>
    </form>
  );
}
