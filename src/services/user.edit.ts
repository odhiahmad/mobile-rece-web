import axios from './index';

export interface IEditUser {
  ID: string;
  Name: string;
  Username: string;
  PhoneNumber: number;
  Email: string;
  BirthPlace: string;
  BirthDate: string;
  MotherName: string;
  BankAccount: number;
}

export const editUser = async (payload: IEditUser) => {
  try {
    const response = await axios({
      url: '/users/edit',
      method: 'PUT',
      data: payload,
    });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
