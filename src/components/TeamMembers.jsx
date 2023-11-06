/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { Tilt } from 'react-tilt';

import { team } from '../constants'
import { styles } from '../styles';

const PersonCard = ({ name, image }) => {
  return (
    <Tilt option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>test</p>
      </div>
    </Tilt>
  )
}

const TeamMembers = () => {
  return (
    <div className={`mt-20 flex flex-wrap gap-7 mx-auto max-w-[96rem]`}>
      {team.map((person, index) => (
        <PersonCard key={`person.${index}`} {...person} />
      ))}
    </div>
  )
}

export default TeamMembers;