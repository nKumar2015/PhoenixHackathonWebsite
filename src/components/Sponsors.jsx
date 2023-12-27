/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { lcpscs, awmg, northpoint, reston, acf, desmos_logo, sponsorpacket, coderschool } from "../assets";
import { sponsor } from "../constants";

const Sponsors = () => {
  return (
    <div className="text-center flex flex-col items-center text-[length:var(--font-size-13xl)] text-[color:var(--c3)]">
      <div className="mb-[24px]">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Sponsors</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={styles.sectionSubText}
        >
          {sponsor.text}
          <a
            href={sponsorpacket}
            className="flex items-center text-blue-500 font-extrabold inline-flex hover:underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsorship Packet
          </a>
        </motion.p>
      </div>
      <div className="flex flex-row gap-5 w-[100%] h-[50px] overflow-hidden relative">
        <div className="block md:w-[200%] w-[350%] absolute overflow-hidden animate-[marquee_6s_linear_infinite] sm:animate-[marquee_12s_linear_infinite]">
          <div className="flex justify-between flex-row float-left overflow-hidden w-[50%] h-[38px] xs:h-[43px] lg:h-[50px]">
            <img className="p-1" src={lcpscs} style={{ width: "auto" }} />
            <img className="p-1" src={awmg} style={{ width: "auto" }} />
            <img className="p-1" src={northpoint} style={{ width: "auto" }} />
            <img className="p-1" src={reston} style={{ width: "auto" }} />
            <img className="p-1" src={acf} style={{ width: "auto" }} />
            <img className="p-1" src={desmos_logo} style={{ width: "auto" }} />
            <img className="p-1" src={coderschool} style={{ width: "auto" }} />
            <div></div>
          </div>
          <div className="flex justify-between flex-row float-left overflow-hidden w-[50%] h-[38px] xs:h-[43px] lg:h-[50px]">
            <img className="p-1" src={lcpscs} style={{ width: "auto" }} />
            <img className="p-1" src={awmg} style={{ width: "auto" }} />
            <img className="p-1" src={northpoint} style={{ width: "auto" }} />
            <img className="p-1" src={reston} style={{ width: "auto" }} />
            <img className="p-1" src={acf} style={{ width: "auto" }} />
            <img className="p-1" src={desmos_logo} style={{ width: "auto" }} />
            <img className="p-1" src={coderschool} style={{ width: "auto" }} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sponsors, "sponsors");
