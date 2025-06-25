import React,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServiceImg from '../assets/service.png'
import ServiceImg1 from '../assets/service1.png'
import ServiceImg2 from '../assets/service2.png'
import ServiceImg3 from '../assets/service3.png'
import {motion,AnimatePresence} from 'framer-motion'
import { fadeIn } from '../utils/animation';

const Services = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold text-[#0e1122]'>How We Can Support You</h2>
          <p className='md:w-1/2 mx-auto'>Together, we can cultivate mindfulness, empower you with tools for balanced living, and guide you toward a healthier state of mind.</p>
        </motion.div>
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.7}}>
    <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Couples Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </TabList>
    </motion.div>

    <AnimatePresence mode='wait'>
    <motion.div
    key={tabIndex}
    initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}>
    <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>

      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-[#06a055] md-4'>Couples Counseling </h3>
        <p className='mb-8'> Rekindle your connection and rebuild harmony in your relationship with our tailored couples counseling program. Our expert counselors help you navigate challenges and strengthen your partnership.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Gain deeper insight into your relationship dynamics</li>
          <li>Learn effective communication strategies</li>
          <li>Restore balance and unity</li>
        </ul>
      </div>
      <div className='md:w-1/2  '>
        <img src={ServiceImg} alt='' className='w-full  h-auto rounded-2xl object-cover'/>
      </div>
    </TabPanel>
    <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>

<div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
  <h3 className='text-3xl font-semibold text-[#06a055] md-4'>Parenting Skills </h3>
  <p className='mb-8'> Equip yourself with practical techniques to navigate the joys and challenges of parenthood with confidence.</p>
  <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
  <ul className='list-disc list-inside space-y-3'>
    <li>Understanding parent better relationship better</li>
    <li>Understanding how it works</li>
    <li>Understanding how to bring yourself together</li>
  </ul>
</div>
<div className='md:w-1/2  '>
  <img src={ServiceImg1} alt='' className='w-full  h-auto rounded-2xl object-cover'/>
</div>
    </TabPanel>
    <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>

    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-[#06a055] md-4'>Overcoming Feeling Stuck</h3>
      <p className='mb-8'> Break free from stagnation with personalized strategies to rediscover purpose and momentum in your life</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding relationship better</li>
        <li>Understanding how it works</li>
        <li>Understanding how to bring yourself together</li>
      </ul>
    </div>
    <div className='md:w-1/2  '>
      <img src={ServiceImg2} alt='' className='w-full  h-auto rounded-2xl object-cover'/>
    </div>
    </TabPanel>
    <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>

    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-[#06a055] md-4'>Building Self-Confidence </h3>
      <p className='mb-8'> Develop a stronger sense of self through guided support and proven methods to boost your confidence.</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding relationship better</li>
        <li>Understanding how it works</li>
        <li>Understanding how to bring yourself together</li>
      </ul>
    </div>
    <div className='md:w-1/2  '>
      <img src={ServiceImg3} alt='' className='w-full  h-auto rounded-2xl object-cover'/>
    </div>
    </TabPanel>
    </motion.div>
    </AnimatePresence>
  </Tabs>
        </div>
      </div>
      </div>
  )
}

export default Services