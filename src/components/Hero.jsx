import React from 'react'
import herob from '../assets/hero.png'
import {IoArrowForwardCircleSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/animation'

const Hero = () => {
  return (
    <section id='home' className='md:h-screen bg-[#0e1122] flex items-center text-white pt-28'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side*/}
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='md:w-1/2'>
        <h1 className='text-4xl font-bold md:4 md:w-3/5 leading-snug '> Begin Your Journey to Mental Wellness</h1>
        <p className='text-lg mb-12 md:pr-8'>Reducing stress, understanding your emotions, strengthening connections, enhancing focus, and practicing self-compassion are all within reach. Explore the foundations of mindfulness with our expertly crafted guide on meditation and mental well-being.</p>
        <button className='bg-[#06a055] text-white py-3.5 px-8 font-medium rounded-md hover:bg-[#06a055]/90'>
          <a href='#contact' className='flex gap-1 items-center'>
            <span>Get Started Today</span>
            <IoArrowForwardCircleSharp />
            

          </a>
        </button>
        </motion.div>
        {/* Right side*/}
        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='md:w-1/2 h-full '>
        <img src={herob} alt='hero image'/>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero