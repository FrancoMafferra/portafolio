import React from 'react';
import Image from '../assets/avatar.png';
import {FaGithub, } from 'react-icons/fa';
import { AiFillLinkedin } from "react-icons/ai";
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
  <section className='section' id='home'>
  <div className='container mx-auto flex items-center justify-center'>
  <div className='w-2/3 lg:w-1/3'>
  
  <div className='flex-1 text-center font-secondary lg:text-left'>
  <h1 className='text-5xl font-bold leading-tight lg:text-9xl'>
  FRANCO <span>MAFFERRA</span>
  </h1>
  </div>
  
  <div className='text-4xl lg:text-6xl font-secondary font-semibold leading-relaxed mb-6'>
  <span className='text-white mr-4'>I am a</span>
  <TypeAnimation
  repeat={Infinity}
  speed={50}
  className='text-accent'
  wrapper='span'
  sequence={[
  'DEVELOPER',
  2000,
  'FULL-STACK DEVELOPER!',
  2000,
  ]}
  />
  </div>
  
  <p className='text-lg mb-6'>
  In addition to my technical background, I consider myself a committed and dedicated professional. I love working as a team and collaborating closely with my clients to understand their needs and offer tailor-made solutions. My main goal is to create quality digital experiences that are visually appealing and easy to use.
  </p>
  
  <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
  <button className='btn btn-lg'>Contact me</button>
  <a href='#' className='text-gradient btn-link'>My Portfolio</a>
  </div>
  
  <div className='flex text-2xl gap-x-6 max-w-max mx-auto lg:mx-0 mt-3'>
  <a href='https://www.linkedin.com/in/franco-mafferra-82a5a1248/'>
  <AiFillLinkedin target='blank' color='#fff' />
  </a>
  <a href='https://github.com/FrancoMafferra'>
  <FaGithub target='blank' color='#fff' />
  </a>
  </div>
  
  </div>
  
  <div className='hidden lg:flex flex-1 justify-center '>
  <img src={Image} alt='' className='w-full' />
  </div>
  </div>
  </section>
  );
  }; 

export default Banner;
