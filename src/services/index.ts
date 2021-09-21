import axios from 'axios';
import { configureAppStore } from 'store/configureStore';
import { getToken } from 'utils/cookie';

let axiosInstance;

const initialHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: '',
};

const claimBaseUrl = process.env.VUE_APP_BASE_API;
const userBaseUrl = process.env.VUE_APP_BASE_API_USER;
const prodBaseUrl = process.env.VUE_APP_BASE_API_PRODUCTION;

export function setUpAxios() {
  axiosInstance = axios.create({
    baseURL: claimBaseUrl,
  });

  axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
      if (
        (error.response && error.response.data.status === 401) ||
        error.response.data.statusCode === 401
      ) {
        if (
          error.response.data.name &&
          error.response.data.name === 'CREDENTIAL_NOT_MATCH'
        ) {
          // message.warning('Credential Login Anda Salah');
        } else {
          // message.warning('Sesi Anda telah habis, silahkan login kembali');
        }
        const store = configureAppStore();
        // store.dispatch('auth/forceLogout');
      }
      return Promise.reject(error);
    },
  );
}

export default function Axios(config, service) {
  // DEFINE BASE URL BASED ON SERVICE CALLED 'user' | 'production' | 'claim' | undefined
  let baseURL;
  if (service === 'user') {
    baseURL = userBaseUrl;
  } else if (service === 'production') {
    baseURL = prodBaseUrl;
  } else if (service === 'claim' || !service) {
    baseURL = claimBaseUrl;
  }
  // INIT HEADER
  const headers = {
    ...initialHeader,
  };
  // APPEND TOKEN
  const token = getToken();
  headers.Authorization = `${token}`;
  // FINAL INTERCEPTOR CONFIG
  const finalConfig = {
    baseURL,
    headers,
    ...config,
  };
  // RETURN AXIOS
  return axiosInstance.request(finalConfig);
}
