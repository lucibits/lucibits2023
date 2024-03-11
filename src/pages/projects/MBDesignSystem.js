import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

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
                    <h1 className='text-4xl font-serif py-2'>Healthcare SaaS platform - Design system</h1>
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
                    <p className='text-lg py-2'>My work involved the creation of a Design System and Style Guides for the Meddbase main platform, website, newsletters and tools.</p>
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> Figma components, Designed system, Sass. </p>

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
                    <p className='text-base py-2 text-slate-700 dark:text-slate-300'>🔒 More on request.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>                    

                </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold py-2 font-mono'>My involvement in the company</h1>
                    <p className='text-lg py-2'>I made sure that part of my work included anticipating the needs of other teams. For instance, I mentored a Graphic Designer from the Marketing team on the basics of Wordpress and conducted mentoring sessions on basic CSS knowledge for subsequent website adjustments. Additionally, I provided guidance to a few QA testers, Solution Engineers and Back-end developers on CSS and styling.
                    I took charge of creating a centralized Confluence 'How-to' guide, providing comprehensive instructions to enhance time management and foster team independence. This initiative aimed to reduce reliance on individual support and empower team members to troubleshoot and resolve issues autonomously.</p>
                    <p className='text-lg py-2'>I also actively participated as a team member in the MeddLife culture club, where I contributed by providing fun assets for company sweepstakes and other corporate competitions and games.</p>
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold py-2 font-mono'>About the software</h1>
                    <p className='text-lg py-2'>Meddbase is a Saas platform that includes a full suite of healthcare management with features covering consultations, cross-organisation scheduling, patient analysis, document management, electronic referrals, pathology and reporting. The system also offers a user-friendly patient portal, automated email and SMS appointment reminders, and a built-in telemedicine platform with mobile app.</p>
                </div>
                </div>
                <Footer />

        </section>
    )
}

export default MBDesignSystem