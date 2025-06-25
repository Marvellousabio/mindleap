import React from 'react'
import {BsFillChatQuoteFill} from 'react-icons/bs';
import review1 from '../assets/review1.jpg'
import review3 from '../assets/review3.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/animation';

const testimonials =[
 
{
  name:'John Smith',
  location : 'Los Angeles, CA',
  review: 'This is by far my favorite resource for mental well-being. It’s worth every moment spent—I can’t recommend it enough!',
  image:review1,
},
{
  name:'Marve mill',
  location : 'Nigeria, CA',
  review: 'This service is reliable, professional, and truly transformative. I highly recommend it to anyone seeking mental wellness support.',
  image:review3,
},

]

const Testimonial = () => {
  return (
    <div id='testimonial'className='h-screen bg-[#f7f8fc] py-12'>
     <div className='container mx-auto'>
     <motion.div 
             variants={fadeIn('up', 0.2)}
                                 initial='hidden'
                                 whileInView={'show'}
                                 viewport={{once:false, amount:0.7}}
                                  className='text-center mb-12'>
          <h3 className='text-4xl font-bold font-secondary mb-3'>What Our Client Say</h3>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt suscipit quam maiores sapiente impedit nobis excepturi amet cupiditate sequi accusamus architecto autem! </p>
        </motion.div>
     </div>
     <motion.div 
             variants={fadeIn('left', 0.2)}
                                 initial='hidden'
                                 whileInView={'show'}
                                 viewport={{once:false, amount:0.7}}
                                  className='flex flex-col md:w-4/5 mx-auto md:gap-12 gap-8 md:flex-row '>
      {testimonials.map((testimonial, index)=>(
        <div key={index} className='relative bg-white rounded-lg p-6 flex-1 hover:shadow-2xl'>
          <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
          <BsFillChatQuoteFill className='size-12 text-[#06a055]'/>
          </div>
          <div className='flex flex-col space-y-3 mb-4'>
            <p className='text-lg mb-2'>{testimonial.review}</p>
            <div className='flex gap-1'>
              <img src={testimonial.image} alt='review image' className='size-16 rounded-full object-cover mx-4 '/>
            <div >
              <p className='font-semibold'>{testimonial.name}</p>
              <p className='text-gray-600 '>{testimonial.location}</p>
            </div>
            </div>
          </div>
          </div>
      ))
      }
      
     </motion.div>
     </div>
  )
}

export default Testimonial