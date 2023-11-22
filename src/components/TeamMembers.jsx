/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { Tilt } from 'react-tilt';

import { team } from '../constants'
import { styles } from '../styles';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const PersonCard = ({ name, image, role }) => {
  return (
    <Tilt option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[280px] w-full">
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{role}</p>
      </div>
    </Tilt>
  )
}

const TeamMembers = () => {
  return (
    <div className={`mt-20 flex items-center flex-col gap-7 mx-auto max-w-[96rem]`}>
      <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Sponsors</h2>
        </motion.div>
      <div classname='flex flex-row flex-wrap w-[1000px]'>
        {team.map((person, index) => (
          <PersonCard key={`person.${index}`} {...person} />
        ))}
      </div>
    </div>
  )
}

export default TeamMembers;