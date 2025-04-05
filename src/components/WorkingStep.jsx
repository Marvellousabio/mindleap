import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animation'

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 backgroundImage'>
        <div className='absolute insert-0 bg bg-opacity-85'></div>
            
            <motion.div
            variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.7}}>
                   <div className='relative container mx-auto px-4 py-20'>
                <div className='text-white text-center mb-20'>
                <h2 className='text-4xl font-bold font-secondary mb-4'>How It Works</h2>
                <p className='text-lg md:w-1/2 w-full mx-auto'>with love we use to guide you, dignissions incident quick race, and we can do work togrther </p>
                </div>

           <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 trasform -translate-x-1/2 -translate-y-1/2 bg-[#06a055] text-white size-14 rounded-full flex items-center justify-center'>1</div>
                    <h3 className='text-lg font-medium mt-8'> Fill a form</h3>
                    <p className='my-2'>Step 1 descrption goes here. Lorem iorem color sit.</p>
                </div>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 trasform -translate-x-1/2 -translate-y-1/2 bg-[#06a055] text-white size-14 rounded-full flex items-center justify-center'>2</div>
                    <h3 className='text-lg font-medium mt-8'> Get Matched</h3>
                    <p className='my-2'>Step 1 descrption goes here. Lorem iorem color sit.</p>
                </div>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 trasform -translate-x-1/2 -translate-y-1/2 bg-[#06a055] text-white size-14 rounded-full flex items-center justify-center'>3</div>
                    <h3 className='text-lg font-medium mt-8'>Sheduler</h3>
                    <p className='my-2'>Step 1 descrption goes here. Lorem iorem color sit.</p>
                </div>
                </div>
                </div>
            </motion.div>
    </div>
  )
}

export default WorkingStep