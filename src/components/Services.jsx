import React from 'react';
// icon 
import { BsArrowUpRight } from "react-icons/bs";
// motion 
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: "Web Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque dignissimos eos sit omnis magni, perspiciatis odio nobis reprehenderit ipsa!",
    link: "Lern more",
  },
  {
    name: "Wibu Stress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque dignissimos eos sit omnis magni, perspiciatis odio nobis reprehenderit ipsa!",
    link: "Lern more",
  },
  {
    name: "Penghalu hamdal",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque dignissimos eos sit omnis magni, perspiciatis odio nobis reprehenderit ipsa!",
    link: "Lern more",
  },
  {
    name: "Product Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque dignissimos eos sit omnis magni, perspiciatis odio nobis reprehenderit ipsa!",
    link: "Lern more",
  }
]

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Think</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis?
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left',0.5)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index) => {
                return (<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{service.name}</h4>
                    <p className='font-secondary leading-tight'>{service.description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href={()=>false}><BsArrowUpRight/></a>
                    <a href="#" className='text-gradient text-sm'>{service.link}</a>
                  </div>
                </div>)
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
