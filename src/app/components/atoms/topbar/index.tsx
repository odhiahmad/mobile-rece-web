import * as React from 'react';
import Styles from './styles';
import LeftChevron from 'assets/img/left-chevron.png';
import { useHistory } from 'react-router';

export function TopBar() {
  // const body = document.body;
  // body.style.backgroundColor = colors.black20;
  const history = useHistory();
  return (
    <>
      <Styles>
        <div className="topbar flex" onClick={() => history.goBack()}>
          <img src={LeftChevron} alt="Left Chevron" />
        </div>
        <div className="topbar-filler"></div>
      </Styles>
    </>
  );
}
