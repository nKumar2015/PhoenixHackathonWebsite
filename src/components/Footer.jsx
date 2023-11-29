/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { planning } from '../constants';

const Footer = () => {

  return (
    <div className="flex flex-wrap justify-center bg-tertiary p-2">
        <a className='m-5 hover:font-bold hover:underline'target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/3crGWCaz25kZ55FCA">Rock Ridge High School</a>
        <Link
              to={`${planning}`}
              target="_blank"
              rel="noopener noreferrer"
              className="m-5 hover:font-bold hover:underline"
            >
              <span>Info Packet</span>
        </Link>        
        <a className='m-5 hover:font-bold hover:underline' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/phoenix.hacks/'>Instagram</a>
        <Link className='m-5 hover:font-bold hover:underline' to='javascript:void(0)'onClick={() => window.location = 'mailto:rockridge@phxhax.com'}>
          rockridge@phxhax.com
        </Link>

    </div>
  )
}

export default Footer