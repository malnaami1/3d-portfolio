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
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="m-4 text-secondary text-[17px] max-w-7xl leading-[30px]">
          Filler for now: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut ante purus, pharetra et ipsum nec, egestas molestie dolor. 
          Donec commodo, lectus vel maximus elementum, tellus velit consequat quam, quis placerat sem orci ut arcu. 
          Mauris sit amet aliquam elit, sed tempor massa. Donec lobortis finibus dictum. 
          Integer eleifend imperdiet dui eget eleifend. Suspendisse varius nunc sit amet convallis sodales. 
          Nullam nibh turpis, placerat ut porta at, maximus ut erat. Integer sodales non nisl id rhoncus. Duis accumsan tortor hendrerit enim luctus tincidunt. 
          Fusce quis purus urna. Etiam sit amet eros vel leo sagittis pulvinar. Phasellus commodo felis vel mi scelerisque, vel maximus est porttitor. Quisque at tellus nec arcu feugiat sollicitudin. 
          Maecenas commodo, leo ac molestie imperdiet, elit leo cursus enim, vel malesuada orci sem ac arcu. Pellentesque et justo felis.
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