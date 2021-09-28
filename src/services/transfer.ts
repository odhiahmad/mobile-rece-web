import axios from './index';

export interface ICreateUser {
  Balance: number;

  IdUser: string;
}

export const transfer = async (payload: ICreateUser) => {
  try {
    const response = await axios({
      url: '/wallet/withdraw/' + payload.IdUser,
      method: 'POST',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
