/* eslint-disable no-unused-vars */
import React from "react"
import { styles } from '../styles';
import { SectionWrapper } from '../HOC'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { about } from '../constants'
import { hackathon, workshops, hacking } from "../assets";

const About = () => {
  return (
    <>
      <div>
        <h2 className={styles.headerText}>{about.header.title}</h2>
      </div>

      <div className="mb-[50px] xs:mb-[100px] sm:mb-[200px] space-x-10 flex flex-row">
        <img src={hacking} className="hidden md:flex" />
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>{about.phoenix.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.phoenix.desc}
          </motion.p>
        </div>
      </div>

      <div className="mb-[50px] xs:mb-[100px] sm:mb-[200px] flex flex-row">
        <div className="mr-[30px]">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>{about.hackathon.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.hackathon.desc}
          </motion.p>
        </div>
        <img src={hackathon} className="hidden md:flex max-h-[500px]" />
      </div>

      <div className="mb-[50px] xs:mb-[100px] sm:mb-[200px] flex flex-row">
        <img src={workshops} className="hidden md:flex" />
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>{about.workshops.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.workshops.desc}
          </motion.p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mr-[30px]">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>{about.prizes.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.prizes.desc}
          </motion.p>
        </div>
        <img src={hackathon} className="hidden md:flex max-h-[500px]" />
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")