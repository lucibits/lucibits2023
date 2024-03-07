import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import * as Unicons from '@iconscout/react-unicons';
import {Link } from "react-router-dom";

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    
    return (
        <div className='py-12 px-4 md:px-32 dark:bg-slate-900 transition-colors duration-400'>

            <motion.div 
                variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.45
                    }}
                className='flex flex-wrap bg-gradient-2 rounded-xl items-center '>

                {/* image column */}
                <div className='md:w-1/2 bg-gray-200 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl h-[32rem]'>
                    <img src={require("../assets/pharmacy-portal-01.4.1.jpg" )} 
                            alt="Project" 
                            className=' w-full h-full object-cover rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl'
                            />
                </div>  

                {/* text column */}
                {/* <div className='w-full md:w-1/2 py-4 px-4 md:px-8'>
                    <div>
                        <h1 className='text-xl font-medium text-indigo-700'>My work consist on a range of unique products designed and developed with both users and stakeholders in mind.</h1>
                    </div>
                    
                    <Link to="/portfolio">
                        <button className='flex font-bold bg-white/50 text-indigo-700 hover:transition-all hover:bg-white pl-4 pr-2 py-2 mt-4 rounded-full hover:shadow-lg'>
                            View all projects
                            <Unicons.UilArrowRight className="mx-1"/>
                        </button>
                    </Link>
                </div>  */}

            </motion.div>

        </div>
    )
}

export default Hero