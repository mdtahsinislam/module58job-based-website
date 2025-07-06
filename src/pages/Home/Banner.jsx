import React from 'react';
import { motion } from "motion/react";
import team from '../../assets/team/team.jpg';
import teami from '../../assets/team/teami.jpg';
const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <motion.img 
      src={team}
      animate={{y:[100,150,100]}}
      transition={{duration:7,repeat:Infinity}}
      className="max-w-sm rounded-lg shadow-2xl border-blue-300 border-s-8 border-b-8"
    />


    <motion.img 
      src={teami}
      animate={{x:[100,150,100]}}
      transition={{duration:11, delay:5, repeat:Infinity}}
      className="max-w-sm rounded-lg shadow-2xl border-blue-300 border-s-8 border-b-8"
    />


    </div>
    <div className='flex-1'>
        <motion.h1  animate={{ rotate: 370 , transition:{duration:6}}} h1  className="text-5xl  font-bold">Latest 
            <motion.span animate={{color:['#4B70F5','#ff5733','#33ff33','#8a33ff'],
                transition:{duration:4,repeat:Infinity}
            }}>Jobs</motion.span> News!</motion.h1>
       <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 6 }}
      className="text-5xl  font-bold"
    >
      Remote  <motion.span animate={{color:['#ff5733','#33ff33','#8a33ff','#4B70F5'],
                transition:{duration:6,repeat:Infinity}
            }}>Jobs</motion.span>
    </motion.h1>
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
