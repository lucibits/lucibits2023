import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Cyclescheme = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section>
            <div className='py-4 md:py-16 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-[#033F2E] dark:text-slate-300 dark:border-0'>
                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.10
                    }}
                    className='pt-6 md:px-44'>
                    <h1 className='text-4xl font-serif py-2'>Cyclescheme platform</h1>
                </motion.div>
                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.25
                    }}
                    className='pb-6 md:px-44'>
                    <p className='text-lg py-2'>My work involved the creation of user flows, wireframes and user journey working prototypes, front-end implementation of the Cyclescheme purchase and code redemption scheme funnel for both Cyclescheme B2C and B2B platforms.</p>
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> AngularJs, Bootstrap, Adobe XD. </p>
                </motion.div>

                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.35
                    }}
                    className='py-2 md:px-44'>
                    <img src={require("../../assets/cyclescheme-01.2.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                    <p className='text-base py-2 text-slate-700 dark:text-slate-300'>🔒 More on request.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>   
                </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>About Cyclescheme</h1>
                    <p className='text-lg py-2'>Cyclescheme is a benefit on a bike and accessories for employees to save money and spread the cost allowing for the payments to be taken tax efficiently from the employee salary by their employer.</p>
                    <p className='text-lg py-2'>The scheme has a complex funnel based on user and edge cases with integration for the main management software, the employer then can review the application and pay for the employee Cyclescheme package.</p>
                    <p className='text-lg py-2'>The system provides the generation of an e-certificate that you can exchange online or in-store.</p>
                </div>
            </div>
            <Footer />

        </section>
    )
}

export default Cyclescheme