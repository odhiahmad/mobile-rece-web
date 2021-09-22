import axios from './index';

export interface ILogin {
  username: string;
  password: string;
}

export const login = async (payload: ILogin) => {
  try {
    const response = await axios({
      url: '/account/login',
      method: 'POST',
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
