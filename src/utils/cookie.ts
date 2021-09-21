import cookies from 'js-cookie';

const keys = {
  token: 'rece-token',
  refreshToken: 'rece-refresh-token',
};

export function setToken(val: string) {
  cookies.set(keys.token, val);
}

export function setRefreshToken(val: string) {
  cookies.set(keys.refreshToken, val);
}

export function getToken() {
  return cookies.get(keys.token);
}

export function getRefreshToken() {
  return cookies.get(keys.refreshToken);
}

export function removeToken() {
  cookies.remove(keys.token);
}

export function removeRefreshToken() {
  cookies.remove(keys.refreshToken);
}
