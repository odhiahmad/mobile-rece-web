import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'app/components/atoms/input/loadable';
import Button from 'app/components/atoms/button/loadable';
import userLogo from 'assets/img/login/user.png';
import lockLogo from 'assets/img/login/lock.png';
import { login as loginService } from 'services/auth';
import { setToken } from 'utils/cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
});

export function FormLogin() {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async values => {
    try {
      setLoading(true);
      const response = await loginService({
        username: values.username,
        password: values.password,
      });

      if (response.errorId === 404) {
        toast.error('Email atau Password Anda Salah', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const { data } = response;
        setToken(response.Data);
        window.location.reload();
      }
      setLoading(false);
    } catch (error) {
      // [NOTE] DELETE WHEN FULLY INTEGRATE WITH API, FOR TESTING PURPOSE ONLY
      setToken('test');
      // window.location.reload();
      setLoading(false);
    }
  };
  // FORMIK
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      onSubmit(values);
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
      <Button
        id="login-submit"
        type="submit"
        loading={loading}
        fullWidth
        className="mb-1"
      >
        MASUK
      </Button>
    </form>
  );
}
