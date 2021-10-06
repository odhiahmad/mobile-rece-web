import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'app/components/atoms/input/loadable';
import InputNumber from 'app/components/atoms/input-number/loadable';
import Button from 'app/components/atoms/button/loadable';
import DatePicker from 'app/components/atoms/datepicker/loadable';
import userLogo from 'assets/img/login/user.png';
// import lockLogo from 'assets/img/login/lock.png';
import ktpLogo from 'assets/img/id-card.png';
import phoneLogo from 'assets/img/phone.png';
import calendarLogo from 'assets/img/calendar.png';
import { editUser } from 'services/user.edit';
import useRouter from 'app/components/hooks/router';
// import dayjs from 'dayjs';
import { getToken } from 'utils/cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  email: Yup.string()
    .email('Format email salah')
    .required('Email tidak boleh kosong'),

  phone: Yup.string()
    .typeError('Nomor handphone tidak boleh kosong')
    .required('Nomor handphone tidak boleh kosong'),
  mother: Yup.string().required('Nama ibu kandung tidak boleh kosong'),
  bank: Yup.string().required('Nomor rekening tidak boleh kosong'),
  birthplace: Yup.string().required('Tempat lahir tidak boleh kosong'),
  birthdate: Yup.string().required('Tanggal lahir tidak boleh kosong'),
});

export function FormUbahProfile() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const token = getToken();
  const decoded = jwt_decode<JwtPayload>(token || '') || null;
  const tempUser = decoded['account_id']['user'];
  const tanggal = tempUser.BirthDate;

  const onSubmit = async values => {
    try {
      setLoading(true);
      await editUser({
        ID: tempUser.ID,
        Name: values.name,
        Username: values.email,
        PhoneNumber: values.phone,
        Email: values.email,
        BirthPlace: values.birthplace,
        BirthDate: values.birthdate,
        MotherName: values.mother,
        BankAccount: values.name,
      });
      router.push({ pathname: router.route.home });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: tempUser.Name,
      username: tempUser.Username,
      email: tempUser.Email,
      phone: tempUser.PhoneNumber,
      mother: tempUser.MotherName,
      bank: tempUser.BankAccount,
      birthplace: tempUser.BirthPlace,
      birthdate: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      onSubmit(values);
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
          id="phone-input"
          name="phone"
          logo={phoneLogo}
          colorScheme="grey"
          masking="none"
          placeholder="Nomor HP"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone !== undefined && formik.touched.phone}
          errorMsg={formik.errors.phone}
        />
        <Input
          id="birthplace-input"
          name="birthplace"
          logo={userLogo}
          colorScheme="grey"
          placeholder="Tempat Lahir"
          value={formik.values.birthplace}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.birthplace !== undefined && formik.touched.birthplace
          }
          errorMsg={formik.errors.birthplace}
        />
        <DatePicker
          id="birth-date"
          name="birthdate"
          format="DD-MM-YYYY"
          outputFormat="YYYY-MM-DD"
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
        <InputNumber
          id="bank-input"
          name="bank"
          logo={ktpLogo}
          colorScheme="grey"
          masking="none"
          placeholder="Nomor Rekening Bank"
          value={formik.values.bank}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.bank !== undefined && formik.touched.bank}
          errorMsg={formik.errors.bank}
        />
      </div>
      <Button
        id="register-submit"
        type="submit"
        fullWidth
        loading={loading}
        className="mb-1"
      >
        Ubah Profil
      </Button>
    </form>
  );
}
