import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Button from 'app/components/atoms/button/loadable';
import Styles from './styles';
import { H1Main } from 'styles/texts';

export function PageOtp() {
  const [otp, setOtp] = React.useState<string[]>([]);
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const onTriggerCursor = () => {
    inputRef.current.focus();
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
              Kami telah mengirimkan kode verifikasi ke nomor{' '}
              <span className="text-heavy">+62812-3456-7890</span>
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
            <Button id="otp-submit" className="w-100">
              Verifikasi
            </Button>
          </div>
          <div className="text-info">
            <span>Tidak terima kode verifikasi? </span>
            <span className="color-black30 pointer">Kirim Ulang </span>
            <span className="color-main pointer">(59)</span>
          </div>
        </div>
      </Styles>
    </>
  );
}
