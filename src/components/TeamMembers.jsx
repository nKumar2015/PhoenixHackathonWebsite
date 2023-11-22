/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { Tilt } from 'react-tilt';

import { team } from '../constants'
import { styles } from '../styles';
import { motion } from "framer-motion";
import { SectionWrapper } from "../HOC";

import { fadeIn, textVariant } from "../utils/motion";


const PersonCard = ({ name, image, role }) => {
  return (
    <Tilt
      option={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 sm:min-w-[285px] min-w-[150px] rounded-2xl"
    >
      <div className="flex flex-col relative sm:h-[230px] h-[185px] sm:w-[250px] w-[200px] items-center">
        <img src={image} alt={name} />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold sm:text-[24px] text-[16px]">
          {name}
        </h3>
        <p className="sm:mt-2 text-secondary sm:text-[14px] text-[12px]">{role}</p>
      </div>
    </Tilt>
  );
}

const TeamMembers = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Meet our Team</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
        {team.map((person, index) => (
          <PersonCard key={`person.${index}`} {...person} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(TeamMembers,"team")