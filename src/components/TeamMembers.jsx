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
      className="bg-tertiary p-3 xs:p-5 sm:min-w-[285px] xs:min-w-[150px] min-w-[100px] rounded-2xl"
    >
      <div className="flex flex-col relative items-center">
        <img
          src={image}
          alt={name}
          className="xs:h-[185px] sm:h-[230px] h-[124px] w-full asepct-square"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold sm:text-[24px] xs:text-[16px] text-[14px]">
          {name}
        </h3>
        <p className="sm:mt-2 text-secondary sm:text-[14px] xs:text-[12px] text-[10px]">
          {role}
        </p>
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
      <div className="flex flex-wrap justify-center items-center gap-4 xs:gap-8 xs:mt-12">
        {team.map((person, index) => (
          <PersonCard key={`person.${index}`} {...person} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(TeamMembers,"team")