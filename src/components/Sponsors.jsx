/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { lcpscs, mantech, awmg, northpoint, kwf } from "../assets";

const Sponsors = () => {
  return (
    <div className="text-center flex flex-col items-center text-[length:var(--font-size-13xl)] text-[color:var(--c3)]">
      <div className="mb-[24px]">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Sponsors</h2>
        </motion.div>
      </div>
      <div className="flex flex-row gap-5 w-[100%] h-[50px] overflow-hidden relative">
        <div className="block w-[200%] absolute overflow-hidden animate-[marquee_12s_linear_infinite]">
          <div className="flex justify-between flex-row float-left overflow-hidden w-[50%]">
            <img src={lcpscs} style={{ height: 50, width: "auto" }} />
            <img src={mantech} style={{ height: 50, width: "auto" }} />
            <img src={awmg} style={{ height: 50, width: "auto" }} />
            <img src={northpoint} style={{ height: 50, width: "auto" }} />
            <img src={kwf} style={{ height: 50, width: "auto" }} />
            <div></div>
          </div>
          <div className="flex justify-between flex-row float-left overflow-hidden w-[50%]">
            <img src={lcpscs} style={{ height: 50, width: "auto" }} />
            <img src={mantech} style={{ height: 50, width: "auto" }} />
            <img src={awmg} style={{ height: 50, width: "auto" }} />
            <img src={northpoint} style={{ height: 50, width: "auto" }} />
            <img src={kwf} style={{ height: 50, width: "auto" }} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sponsors, "sponsors");
