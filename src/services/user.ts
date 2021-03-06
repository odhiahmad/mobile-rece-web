import axios from './index';

export interface ICreateUser {
  Name: string;
  Username: string;
  Nik: string;
  PhoneNumber: number;
  Email: string;
  BirthPlace: string;
  BirthDate: string; // YYYY-MM-DD
  MotherName: string;
  BankAccount: number;
  Password: string;
}

export const registerUser = async (payload: ICreateUser) => {
  console.log(payload);
  try {
    const response = await axios({
      url: '/users',
      method: 'POST',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
