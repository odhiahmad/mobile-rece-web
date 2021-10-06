import axios from './index';

export interface Histories {
  page: number;
  size: number;
}

export const histories = async (payload: Histories) => {
  try {
    const response = await axios({
      url: '/histories',
      method: 'GET',
    });

    return response;
  } catch (error) {
    throw error;
  }
};
