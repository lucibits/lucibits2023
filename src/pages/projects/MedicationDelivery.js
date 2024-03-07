import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'

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
        <section className='bg-[#F4F4F4] py-4 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>
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
                    <h1 className='text-3xl text-indigo-500 font-mono font-bold py-2'>Medication Delivery Portal</h1>
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
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> Vuejs, Typescript, Sass, Figma components, Design systems, Swagger. </p>
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
                    <p className='text-lg py-2 text-slate-600'>More about this on request as this project falls under NDA.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>                    

                </motion.div>

                <div className='py-6 md:px-44'>
                
                    <h1 className='text-2xl font-bold font-mono py-2'>About the project</h1>
                    <p className='text-lg py-2'>I acted as sole UI/UX Designer and Front-end developer of a team tasked with the development of a pilot for a medication dispensing portal to be integrated to the main system as a new feature service. Phase one had great acceptance and increased user satisfaction generating additional annual revenue.</p>
                    <p className='text-lg py-2'>This product generated a stream of private pharmacies partnerships and B2B business that required a much needed delivery option through the pandemic.</p>

                </div>

                <div className='py-6 md:px-44'>       
                    <h1 className='text-2xl font-bold font-mono py-2'>Pilot and phase 2</h1>
                    <p className='text-lg py-2'>My work encompassed various aspects of the project lifecycle, including research, planning, competitor analysis, and persona development. I created intricate flow diagrams for the portal and main system platform database, ensuring seamless integration with Meddbase software and patient databases. Additionally, I designed and implemented e-prescription PDFs adhering to NHS standards and facilitated PDF generation for all parties involved.</p>
                    <p className='text-lg py-2'>Using Figma, I conducted wireframing and prototyping, creating reusable components for efficient development. The portal was developed in Vue.js, TypeScript, and Sass, following BEM naming conventions. I also contributed to the design of the API using Swagger.</p> 
                    <p className='text-lg py-2'>The product was designed to be responsive and compliant with WCAG accessibility guidelines. Notably, I spearheaded the implementation of a well-received dark mode feature, a first for any Meddbase product.</p>                    
                    <p className='text-lg py-2'>The MVP was launched within six months, and Phase 2 commenced shortly after, focusing on refining the flow diagrams, prototyping landing pages for e-prescription visualization, and enhancing the delivery service process. This phase also involved implementing features such as authorized pharmacy selection and pick-up options.</p>
                    
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold font-mono py-2'>Conclusion</h1>
                    <p className='text-lg py-2'>I found working on this product to be incredibly rewarding. It allowed me to fully immerse myself in various aspects of the design, development, and product management process.</p>                    

                </div>

        </section>
    )
}

export default MedicationDelivery