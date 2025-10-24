import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
        
      </motion.div>
    
    </Tilt>
  )

}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="m-4 text-secondary text-[17px] max-w-7xl leading-[30px]">
          My name is Maryam and I am a computer science student at UTDallas. I am an aspiring software engineer and creative developer who loves building interactive, well-designed experiences, from full-stack web apps to immersive games and digital worlds.
          My work spans web development, systems programming, game design, and mobile app development, and I’m always exploring how I can use technology and creativity and take them a step further.
          As generic as it sounds, curiosity is my biggest fuel! I am always looking for a hands-on approach to learning, always looking for new ways to push design, improve performance, and increase interactivity. 
          Whether it’s building a system, developing a dynamic web tool, or publishing an iOS game, I care about the details that make an experience feel seamless and alive.
      </motion.p>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")