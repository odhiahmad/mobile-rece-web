import axios from './index';

export interface ICreateUser {
  Amount: number;
  IdUser: string;
  UserMerchantId: string;
  PhoneNumber: number;
  Name: string;
  NomorTujuan: number;
}

export const transfer = async (payload: ICreateUser) => {
  try {
    const response = await axios({
      url: '/wallet/transfer/' + payload.IdUser,
      method: 'PUT',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
