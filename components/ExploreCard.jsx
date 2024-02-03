'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, linkUrl }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.13] flex-[1.5]'
    } flex items-center justify-center min-w-[140px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="absolute z-10 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white">
          {title}
        </h3>
      </a>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/idea.png"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </a>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
