import React from 'react';

import miniIcon from '../../../assets/images/mini-icon.svg';

function SideText() {
  return (
    <div className='side-text'>
      <span className='side-text__icon'>
        <img src={miniIcon} alt='Jin Kyu' />
      </span>
      <span className='side-text__erugo'>/ erugo.gada</span>
    </div>
  );
}

export default SideText;
