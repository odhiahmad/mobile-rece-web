import axios from './index';

export interface Histories {
  walletId: string;
}

export const histories = async (payload: Histories) => {
  try {
    const response = await axios({
      url: `histories?page=1&size=5&wallet=${payload.walletId}`,
      method: 'GET',
    });

    return response;
  } catch (error) {
    throw error;
  }
};
