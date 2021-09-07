import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'app/components/atoms/input/loadable';
import Button from 'app/components/atoms/button/loadable';
import DatePicker from 'app/components/atoms/datepicker/loadable';
import userLogo from 'assets/img/login/user.png';
import lockLogo from 'assets/img/login/lock.png';
import ktpLogo from 'assets/img/id-card.png';
import phoneLogo from 'assets/img/phone.png';
import calendarLogo from 'assets/img/calendar.png';
// import dayjs from 'dayjs';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  ktp: Yup.number()
    .typeError('KTP tidak boleh kosong')
    .required('KTP tidak boleh kosong'),
  phone: Yup.number()
    .typeError('Nomor handphone tidak boleh kosong')
    .required('Nomor handphone tidak boleh kosong'),
  mother: Yup.string().required('Nama ibu kandung tidak boleh kosong'),
  birthdate: Yup.string().required('Tanggal lahir tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
  confirmPassword: Yup.string().required(
    'Konfirmasi password tidak boleh kosong',
  ),
});

export function FormRegister() {
  const formik = useFormik({
    initialValues: {
      name: '',
      ktp: undefined,
      phone: undefined,
      mother: '',
      birthdate: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
          id="ktp-input"
          name="ktp"
          type="number"
          logo={ktpLogo}
          colorScheme="grey"
          placeholder="Nomor KTP"
          value={formik.values.ktp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.ktp !== undefined && formik.touched.ktp}
          errorMsg={formik.errors.ktp}
        />
        <Input
          id="phone-input"
          name="phone"
          type="number"
          logo={phoneLogo}
          colorScheme="grey"
          placeholder="Nomor HP"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone !== undefined && formik.touched.phone}
          errorMsg={formik.errors.phone}
        />
        <DatePicker
          id="birth-date"
          name="birthdate"
          dateType="date"
          format="DD-MM-YYYY"
          logo={calendarLogo}
          colorScheme="grey"
          placeholder="Tanggal Lahir"
          value={formik.values.birthdate}
          onChange={(event, date) => {
            formik.setFieldValue('birthdate', date);
          }}
          onBlur={formik.handleBlur}
          error={
            formik.errors.birthdate !== undefined && formik.touched.birthdate
          }
          errorMsg={formik.errors.birthdate}
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
      <Button id="register-submit" type="submit" fullWidth className="mb-1">
        MASUK
      </Button>
    </form>
  );
}
