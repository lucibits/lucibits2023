import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const MedicationDelivery = () => {
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
                    <h1 className='text-3xl text-indigo-500 font-bold py-2'>Medication Delivery Portal</h1>
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
                    <p className='text-lg py-2'>I worked as the lead UI/UX product designer and front-end developer to develop this dispensing portal 
                    in Vuejs, Typescript and a Sass component system.</p>
                    <p className='text-lg text-indigo-700 dark:text-slate-300'>Developed in Vuejs, Typescript and a Sass component system.</p>
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
                    <img src={require("../../assets/pharmacy-portal-01.3.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                    <p className='text-sm py-2 text-slate-500'>There is only so much visuals and source code I can share as the nature of this project being confidential, not published yet or launched yet, therefore, I have provided a brief description of my journey and the work I've done.</p>                    

                </motion.div>

                <div className='py-6 md:px-44'>
                
                    <h1 className='text-2xl font-bold py-2'>About the project</h1>
                    <p className='text-lg py-2'>I partnered with a product architect, as well as a back-end developer team to develop a pilot of this portal for phase one which had great acceptance and increased user satisfaction generating additional annual revenue.</p>
                    <p className='text-lg py-2'>This product generated a stream of private pharmacies partnerships and B2B business that required a much needed delivering option through the pandemic.</p>

                </div>

                <div className='py-6 md:px-44'>       
                    <h1 className='text-2xl font-bold py-2'>Getting ready for the pilot</h1>
                    <p className='text-lg py-2'>After research and planning, the brief provided by the product architect helped me to generate a user flow diagram for development and that would be later used by the QA team, start the design process and prototyping creation for the front end UI views, as well as the views for the integration with Meddbase software and patient database.</p>
                    <p>The portal also featured dark mode which was very well recieved and I am very proud of as being the first implementation of this feature in any of Meddbase products.</p> 
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold py-2'>Starting phase 2</h1>
                    <p className='text-lg py-2'>Once we had the MVP up and running, we started phase 2 which involved landing pages for pharmacist and patient, e-prescription generation and medication delivery process.</p>                    
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold py-2'>Conclusion</h1>
                    <p className='text-lg py-2'>I enjoyed working on this product and I think it was a very rewarding project where I could fully immerse myself in many aspects of the design and development process and product management.</p>                    

                </div>

        </section>
    )
}

export default MedicationDelivery