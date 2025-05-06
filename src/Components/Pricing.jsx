import React from 'react'
import {motion } from 'framer-motion'
import {fadeIn} from '../utils/animation'

const packages =[
  {
    name:'Bronse Packages',
    price: '$99',
    description:'ideal for individual or small business looking to get started',
    features: [
      'Access to basic wellness resources',
      'weekly mental wellness tips',
      'Community support group'
    ],
  },
  {
    name:'Silver Packages',
    price: '$199',
    description:'A great choice for growing bussiness with additional features and support for mental wellness',
    features:[
      'All bronse package features ',
      'Monthly guided meditation section',
      'Access to expert'
    ],
  },
  {
    name:'Gold Packages',
    price: '$299',
    description:'For expert buissness that have grown for individual or small business looking to get started',
    features:[
      'Access toall featues',
      'Mentoring',
      'one on one coching 24/7 ',
      'Advanced mental wellness tracking tools ',
    ],
  },
]

const Pricing = () => {
  const handleScrollToContact=()=>{
    const targetElement =document.getElementById('contact');
    if (targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behaviour:'smooth',
      })
    }
  }
  return (
    <div id='pricing' className=' bg-[#f7f8fc] pt-32'>
      <div className='container mx-auto px-8'>
        <motion.div 
        variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount:0.3}}>
        <div className='text-center mb-12'>
          <h3 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small & Large Brands</h3>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt suscipit quam maiores sapiente impedit nobis excepturi amet cupiditate sequi accusamus architecto autem! </p>
        </div>
        {/*packages*/}
        <div
                             className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12'>
        {packages.map((pkg,index) => (
          <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
            <h3 className='text-2xl mb-4 font-semibold'>{pkg.name}</h3>
            <br className='w-24 border text-[#06a055] border-[#06a055]'/>
            <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-normal'>/mo</span></p>
            <p className='text-lg mb-4 '>{pkg.description}</p>
            <ul className='list-disc list-inside space-y-2 mb-6'>
              {
                pkg.features.map((feature,idx) =>(
                  <li key={idx}>{feature}</li> 
                ))
              }
            </ul>
            <button
            onClick={handleScrollToContact}
             className='bg-[#06a055] text-white px-4 py-2 rounded'>Get Started</button>
          </div>
        ))}
        </div>
          </motion.div>
      </div>

    </div>
  )
}

export default Pricing