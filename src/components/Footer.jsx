/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { menu, close } from '../assets';
import { navLinks } from '../constants';

const Footer = () => {

  return (
    <div className="flex flex-wrap justify-center bg-tertiary p-2">
        <p className='m-5'>Rock Ridge High School</p>
        <p className='m-5'>Information Packet</p>
        <p className='m-5'>Instagram</p>
        <p className='m-5'>Email</p>
    </div>
  )
}

export default Footer