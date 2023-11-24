/* eslint-disable no-unused-vars */
import React from "react"
import { styles } from '../styles';
import { SectionWrapper } from '../HOC'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { about, planning, aboutimgs } from "../constants";
import { Link } from "react-router-dom";
import { hackathon, workshops, hacking, prizes } from "../assets";

const About = () => {
  return (
    <>
      <div className="items-center mb-[50px] xs:mb-[75px] sm:mb-[100px] md:mb-[125px] flex flex-row">
        <img
          src={hacking}
          className="hidden lg:flex max-h-[400px] w-[80%] rounded-2xl mr-8"
        />
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>{about.phoenix.title}</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.phoenix.desc}
            <Link
              to={`${planning}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 font-extrabold inline-flex hover:underline hover:text-white"
            >
              <span>Info Packet</span>
            </Link>
          </motion.p>
        </div>
      </div>

      <div className="items-center mb-[50px] xs:mb-[75px] sm:mb-[100px] md:mb-[125px] flex flex-row">
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
        <img
          src={aboutimgs.welcome}
          className="hidden lg:flex max-h-[400px] w-[80%] rounded-2xl"
        />
      </div>

      <div className="items-center mb-[50px] xs:mb-[75px] sm:mb-[100px] md:mb-[125px] flex flex-row gap-10">
        <img
          src={workshops}
          className="hidden lg:flex max-h-[400px] w-[80%] rounded-2xl"
        />
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

      <div className="items-center flex flex-row ">
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
        <img
          src={prizes}
          className="hidden lg:flex max-h-[400px] w-[80%] rounded-2xl"
        />
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")