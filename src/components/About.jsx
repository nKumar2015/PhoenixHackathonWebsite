/* eslint-disable no-unused-vars */
import React from "react"
import { styles } from '../styles';
import { SectionWrapper } from '../HOC'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { about } from '../constants'
import { hackathon, workshops } from "../assets";

const About = () => {
  return (
    <>
      <div className="mb-[200px] flex flex-row"> 
        <div className="mr-[30px]">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}
            >{about.hackathon.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            {about.hackathon.desc}
          </motion.p>
        </div>
        <img src={hackathon} className="hidden md:flex max-h-[500px]" />
      </div>
      <div className="flex flex-row">
        <img src={workshops} className="hidden md:flex"/>
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}
            >{about.workshops.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            {about.workshops.desc}
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")