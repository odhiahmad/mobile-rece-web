import axios from './index';

export interface ICreateUser {
  Balance: number;
  Sumber: string;
  IdUser: string;
}

export const saving = async (payload: ICreateUser) => {
  console.log(payload);
  try {
    const response = await axios({
      url: '/wallet/topup/' + payload.IdUser,
      method: 'POST',
      data: payload,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
