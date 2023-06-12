import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

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
        <section className='py-4 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>

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
                    <h1 className='text-3xl text-indigo-500 font-bold py-2'>Cyclescheme purchase and code redemption scheme</h1>
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
                    <p className='text-lg py-2'>I worked as UI/UX developer on the purchase and code redemption funnel.</p>
                    <p className='text-lg text-indigo-700 dark:text-slate-300'>Developed in AngularJs and Bootstrap.</p>
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
                    <p className='text-sm py-2 text-slate-500'>There is only so much visuals and source code I can share as the nature of this project being confidential, not published yet or launched yet, therefore, I have provided a brief description of my journey and the work I've done.</p>                    

                </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-3xl font-bold py-2'>About the scheme</h1>
                    <p className='text-lg py-2'>Cyclescheme is a benefit on a bike and accessories for employees to save money and spread the cost allowing for the payments to be taken tax efficiently from the employee salary by their employer.</p>
                    <p className='text-lg py-2'>The scheme has a complex funnel based on user and edge cases with integration for the main management software, the employer then can review the application and pay for the employee Cyclescheme package.</p>
                    <p className='text-lg py-2'>The system provides the generation of an e-certificate that you can exchange online or in-store.</p>
                </div>

        </section>
    )
}

export default Cyclescheme