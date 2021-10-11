import axios from './index';

export interface IWithdraw {
  Amount: number;
  IdUser: string;
  PhoneNumber: number;
}

export const withdraw = async (payload: IWithdraw) => {
  try {
    const response = await axios({
      url: '/wallet/withdraw/' + payload.IdUser,
      method: 'PUT',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
