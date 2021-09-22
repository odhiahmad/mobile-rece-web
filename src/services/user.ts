import axios from './index';

export interface ICreateUser {
  Name: string;
  PhoneNumber: number;
  Email: string;
  BirthPlace: string;
  BirthDate: string; // YYYY-MM-DD
  MotherName: string;
  BankAccount: number;
}

export const registerUser = async (payload: ICreateUser) => {
  try {
    const response = await axios({
      url: '/users',
      method: 'POST',
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
