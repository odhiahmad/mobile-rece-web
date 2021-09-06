import * as React from 'react';
import Styles from './styles';
import LeftChevron from 'assets/img/left-chevron.png';

export function TopBar() {
  // const body = document.body;
  // body.style.backgroundColor = colors.black20;
  return (
    <>
      <Styles>
        <div className="topbar flex">
          <img src={LeftChevron} alt="Left Chevron" />
        </div>
        <div className="topbar-filler"></div>
      </Styles>
    </>
  );
}
