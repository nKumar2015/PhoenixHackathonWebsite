/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { menu, close } from '../assets';
import { navLinks } from '../constants';

const Footer = () => {

  return (
    <div className="flex flex-wrap justify-center bg-tertiary p-2">
        <a className='m-5'target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/3crGWCaz25kZ55FCA">Rock Ridge High School</a>
        <p className='m-5'>Information Packet</p>
        <a className='m-5' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/phoenix.hacks/'>Instagram</a>
        <Link className='m-5' to='javascript:void(0)'onClick={() => window.location = 'mailto:yourmail@domain.com'}>
          phoenixhacks2023@gmail.com
        </Link>
    </div>
  )
}

export default Footer