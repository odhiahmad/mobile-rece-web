import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Button from 'app/components/atoms/button/loadable';
import Styles from './styles';
import { H1Main } from 'styles/texts';
import { otpKonfirmasi } from 'services/otp';
import cookies from 'js-cookie';
import useRouter from 'app/components/hooks/router';

export const PageOtp = props => {
  const router = useRouter();

  const id = cookies.get('userId');
  const email = cookies.get('email');
  const [otp, setOtp] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(0);

  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const onTriggerCursor = () => {
    inputRef.current.focus();
  };

  const onSubmit = async () => {
    if (otp[5] !== undefined) {
      try {
        setLoading(true);
        let kodeOtp = '';
        for (let i = 0; i < 6; i++) {
          kodeOtp += otp[i];
        }
        setLoading(true);
        const dataOtp = await otpKonfirmasi({
          UserId: id,
          OtpCode: kodeOtp,
        });
        console.log(dataOtp.errorId === 401);

        if (dataOtp.errorId === 401) {
          setSuccess(2);
        } else {
          setSuccess(1);
          router.push({ pathname: router.route.home });
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    } else {
      console.log('belum');
    }
  };

  return (
    <>
      <Helmet>
        <title>Verifikasi OTP</title>
        <meta name="description" content="OTP verification page for RECE App" />
      </Helmet>
      <Styles>
        <div className="pl-2 pr-2 pt-2 pb-2">
          <div className="page-otp_top pb-2">
            <H1Main>Verifikasi</H1Main>
            <span>
              Kami telah mengirimkan kode verifikasi ke email{' '}
              <span className="text-heavy">{email}</span>
            </span>
          </div>
          <div className="page-otp_input-wrapper flex-column flex-v-center flex-h-center">
            <div className="w-100 flex flex-h-space flex-full">
              {[0, 1, 2, 3, 4, 5].map(val => (
                <div
                  key={val}
                  className="page-otp_input flex flex-v-center flex-h-center flex-full pointer text-title text-heavy"
                  onClick={onTriggerCursor}
                >
                  {otp[val]}
                </div>
              ))}
            </div>
            <input
              className="page-otp_input-box"
              ref={inputRef}
              onChange={e => setOtp(e.target.value.split(''))}
              type="number"
            />
          </div>
          <div className="page-otp_action mt-2 mb-1-half">
            <Button
              loading={loading}
              id="otp-submit"
              onClick={onSubmit}
              className="w-100"
            >
              Verifikasi
            </Button>
          </div>
          <div className="text-info">
            <span>Tidak terima kode verifikasi? </span>
            <span className="color-black30 pointer">Kirim Ulang </span>
            <span className="color-main pointer">(59)</span>
          </div>
          <div className="text-info">
            {success === 2 ? <span>Kode yang anda masukan salah </span> : <></>}
          </div>
        </div>
      </Styles>
    </>
  );
};
