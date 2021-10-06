import axios from './index';

export interface Wallet {
  walletId: string;
}

export const wallet = async (payload: Wallet) => {
  try {
    const response = await axios({
      url: '/wallet/' + payload.walletId,
      method: 'GET',
    });

    return response;
  } catch (error) {
    throw error;
  }
};
