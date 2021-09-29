import axios from './index';

export interface Riwayat {
  Id: string;
}

export const riwayat = async (payload: Riwayat) => {
  try {
    const response = await axios({
      url: '/account/login' + payload.Id,
      method: 'GET',
    });

    return response;
  } catch (error) {
    throw error;
  }
};
