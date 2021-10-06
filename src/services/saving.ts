import axios from './index';

export interface ICreateUser {
  Amount: number;
  UserMerchantId: string;
  IdUser: string;
}

export const saving = async (payload: ICreateUser) => {
  console.log(payload);
  try {
    const response = await axios({
      url: '/wallet/topup/' + payload.IdUser,
      method: 'PUT',
      data: payload,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
