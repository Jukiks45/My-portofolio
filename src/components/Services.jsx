import React from 'react';
// icon 
import { BsArrowUpRight } from "react-icons/bs";
// motion 
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const Services = () => {
  return (
    <section id='skill' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>My Skill</h2>
            <h3 className='h3 text-white mb-6'>Language </h3>
            {/* <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis?
            </h3> */}
            <div className="grid grid-cols-2 gap-4">
              <div className='mb-[5px]'>
                <div className='flex justify-between mb-1'>
                  <span className='text-[23px] font-medium text-blue-700 dark:text-white'>JavaScript</span>
                  <span className='text-[20px] font-medium text-blue-700 dark:text-white'>45%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-700'>
                  <div className='bg-[#ff56f6] h-[20px] rounded-full' style={{width:"45%"}}></div>
                </div>
              </div>
              <div className='mb-[5px]'>
                <div className='flex justify-between mb-1'>
                  <span className='text-[23px] font-medium text-blue-700 dark:text-white'>PHP</span>
                  <span className='text-[20px] font-medium text-blue-700 dark:text-white'>45%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-700'>
                  <div className='bg-[#ff56f6] h-[20px] rounded-full' style={{width:"45%"}}></div>
                </div>
              </div>
            </div>
            <h3 className='h3 text-white my-6'>Framework</h3>
            {/* <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis?
            </h3> */}
            <div className="grid grid-cols-2 gap-4">
              <div className='mb-[5px]'>
                <div className='flex justify-between mb-1'>
                  <span className='text-[23px] font-medium text-blue-700 dark:text-white'>Laravel</span>
                  <span className='text-[20px] font-medium text-blue-700 dark:text-white'>60%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-700'>
                  <div className='bg-[#ff56f6] h-[20px] rounded-full' style={{width:"60%"}}></div>
                </div>
              </div>
              <div className='mb-[5px]'>
                <div className='flex justify-between mb-1'>
                  <span className='text-[23px] font-medium text-blue-700 dark:text-white'>Express JS</span>
                  <span className='text-[20px] font-medium text-blue-700 dark:text-white'>30%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-700'>
                  <div className='bg-[#ff56f6] h-[20px] rounded-full' style={{width:"30%"}}></div>
                </div>
              </div>
              <div className='mb-[5px]'>
                <div className='flex justify-between mb-1'>
                  <span className='text-[23px] font-medium text-blue-700 dark:text-white'>React JS</span>
                  <span className='text-[20px] font-medium text-blue-700 dark:text-white'>30%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-700'>
                  <div className='bg-[#ff56f6] h-[20px] rounded-full' style={{width:"30%"}}></div>
                </div>
              </div>
            </div>
            {/* <button className='btn btn-sm'>See my work</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
