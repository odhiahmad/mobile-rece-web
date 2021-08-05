import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'app/components/atoms/input/loadable';
import Button from 'app/components/atoms/button/loadable';
import userLogo from 'assets/img/login/user.png';
import lockLogo from 'assets/img/login/lock.png';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
});

export function FormLogin() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
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
          id="username-input"
          name="username"
          logo={userLogo}
          colorScheme="grey"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.username !== undefined && formik.touched.username
          }
          errorMsg={formik.errors.username}
        />
        <Input
          id="password-input"
          name="password"
          logo={lockLogo}
          type="password"
          colorScheme="grey"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.password !== undefined && formik.touched.password
          }
          errorMsg={formik.errors.password}
        />
      </div>
      <Button id="login-submit" type="submit" fullWidth className="mb-1">
        MASUK
      </Button>
    </form>
  );
}
