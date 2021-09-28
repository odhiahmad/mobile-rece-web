import axios from './index';

export interface ICreateUser {
  ID: string;
  Name: string;
  PhoneNumber: number;
  Email: string;
  BirthPlace: string;
  BirthDate: string; // YYYY-MM-DD
  MotherName: string;
  BankAccount: number;
}

export const editUser = async (payload: ICreateUser) => {
  try {
    const response = await axios({
      url: '/users/edit',
      method: 'POST',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
