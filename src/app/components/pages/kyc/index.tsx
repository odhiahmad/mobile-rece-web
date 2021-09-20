import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import TopBar from 'app/components/atoms/topbar/loadable';
import Button from 'app/components/atoms/button/loadable';
import Styles from './styles';

export function PageKyc() {
  const [file, setFile] = React.useState('');
  React.useEffect(() => {
    return function cleanUp() {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, []);
  const onAddFile = e => {
    const content = e.target.files[0];
    setFile(content);
  };
  const onChooseFile = () => {
    (document as any).getElementById('kyc-file').click();
  };
  return (
    <>
      <Helmet>
        <title>Onboarding</title>
        <meta name="description" content="Kyc onboarding page for RECE App" />
      </Helmet>
      <input
        id="kyc-file"
        type="file"
        name="kyc-file"
        hidden
        onChange={onAddFile}
      />
      <TopBar />
      <Styles>
        <div className="page-kyc pl-2 pr-2 flex-column flex-v-center flex-h-center">
          <div className="page-kyc_display">
            {file && <img src={URL.createObjectURL(file)} alt="File Kyc" />}
          </div>
          <div className="flex-column mb-2-half">
            <span className="text-center text-sub-title text-heavy mb-1">
              Onboarding
            </span>
            <span className="text-center text-info text-thin">
              Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
              eiusmod tempor incididunt ut{' '}
            </span>
          </div>
          <div className="w-100">
            <Button
              id="kyc-choose-photo"
              className="w-100"
              type="button"
              onClick={onChooseFile}
            >
              Piih Foto
            </Button>
          </div>
        </div>
      </Styles>
    </>
  );
}
