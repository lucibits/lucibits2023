import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const MBDesignSystem = () => {
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
                    <h1 className='text-3xl text-indigo-500 font-bold py-2'>Design system</h1>
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
                    <p className='text-lg py-2'>I worked as a UI/UX developer on a modern take for the main software.</p>
                    <p className='text-lg text-indigo-700 dark:text-slate-300'>Designed in Figma and styled in Css.</p>
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
                    <img src={require("../../assets/mb-02.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                    <p className='text-sm py-2 text-slate-500'>There is only so much visuals and source code I can share as the nature of this project being confidential, not published yet or launched yet, therefore, I have provided a brief description of my journey and the work I've done.</p>                    

                </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-3xl font-bold py-2'>About the software</h1>
                    <p className='text-lg py-2'>Meddbase is a B2B software that includes a full suite of healthcare management with features covering consultations, cross-organisation scheduling, patient analysis, document management, electronic referrals, pathology and reporting. The system also offers a user-friendly patient portal, automated email and SMS appointment reminders, and a built-in telemedicine platform with mobile app.</p>
                    
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-3xl font-bold py-2'>My involvement in the company</h1>
                    <p className='text-lg py-2'>I made sure that part of my work included anticipating the needs of other teams, in this case I mentored a Graphic designer from the Marketing team on the gists of Wordpress and had mentoring sessions of basic CSS knowledge for consequent website adjustments. As well as a few QA testers and Back-end developers on CSS and styling.</p>
                    <p className='text-lg py-2'>I also participated as a team in the MeddLife culture club, providing fun assets for company sweepstakes and other corporate competition and games.</p>
                </div>

        </section>
    )
}

export default MBDesignSystem