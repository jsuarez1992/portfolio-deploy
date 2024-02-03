'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I am a <span className="font-extrabold text-white">Software Developer</span>,with an interest in Cloud Computing,
        Embedded Systems and Frontend Development. Determined, self-driven and positive mindset, I always like to 
        challenge myself and learn something new.{' '}
        <span className="font-extrabold text-white">
          Previous experience
        </span>{' '}
        include working as a Hardware Engineer trainee at {' '}
        <span className="font-extrabold text-white">Sasken Oy</span>, being a project manager & frontend developer in partnership
        with {' '}<span className="font-extrabold text-white">Centria IT Lab</span> and abroad ERASMUS university experience in
        {' '}<span className="font-extrabold text-white">Germany</span> with HTW Berlin University.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;