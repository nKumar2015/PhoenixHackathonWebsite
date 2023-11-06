/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import { team } from '../constants'

const ProjectCard = ({ name, image, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-fulll ">
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
    </motion.div>
  )
}

const TeamMembers = () => {
  return(
    <div className='mt-20 flex flex-wrap gap-7 '>
      {team.map((person, index) => (
        <ProjectCard key={`person.${index}`} index={index} {...person} />
      ))}
    </div>
  )
}

export default TeamMembers;