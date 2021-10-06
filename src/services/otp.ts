import axios from './index';

export interface IOtp {
  UserId: string;
  OtpCode: any;
}

export const otpKonfirmasi = async (payload: IOtp) => {
  try {
    const response = await axios({
      url: '/otp/verification',
      method: 'POST',
      data: payload,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
