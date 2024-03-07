import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import Footer from './Footer';

const About = () => {

    let Img = require('../assets/Zen_Greenwhich_park.jpg');

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
   
        <section className='bg-[#F4F4F4] h-full pt-4 sm:pt-16 pb-24 contact dark:bg-slate-900 dark:text-slate-300'>
            <div className='grid gap-16 text-2xl pb-12 pt-8 py-4 px-8 md:px-16 lg:px-48'>

            <div>
                    <motion.h1 
                            variants={{
                                hidden: {opacity:0, y: 75},
                                visible: {opacity:1, y: 0}
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.5, delay: 0.10
                            }}
                            className='text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-mono'>
                            <span className="waving-hand">👋🏼</span> 
                            <span className='font-mono'> Hi, nice to meet you!</span>
                        </motion.h1>
                    </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    
                    <div>
                    
                        <motion.p 
                            variants={{
                                hidden: {opacity:0, y: 75},
                                visible: {opacity:1, y: 0}
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.5, delay: 0.25
                            }}
                            className='leading-10 text-slate-600 dark:text-slate-100'>
                            I'm Lucy, and London has been my home for the past decade.<br/><br/>
                            In my free time, I enjoy playing video or board games, exploring various artistic mediums, reading, and playing the piano.
                            <br/><br/>
                            Living in London means indoor activities for much of the year. However, when sunny days arrive, you'll find me biking along the Thames Path, enjoying picnics in the park with my cat, or embarking on day trips around England by train. 
                        </motion.p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <motion.p>
                            <img src={Img} alt="An image about something" className='rounded-2xl w-96'/>
                        </motion.p>
                    </div>
                </div>
                
                <div>
                    <motion.p 
                        variants={{
                            hidden: {opacity:0, y: 75},
                            visible: {opacity:1, y: 0}
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.5, delay: 0.25
                        }}
                        className='leading-10'>
                        <h1 className='text-3xl font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-8'>How do I maintain myself up-to-date?</h1>
                        <div className='flex flex-col md:flex-row gap-16'>
                            <div>
                                <span className='text-slate-600 dark:text-slate-100'>I'm a member of a couple of reading book clubs which gives me the opportunity of reading a monthly selection of books for both pleasure and professional development. </span>
                            </div>
                            <div>
                                <span className='text-slate-600 dark:text-slate-100'>I am also a member of PD and UX women groups in tech and other Dev groups, where we discuss the market and share resources.  </span>
                            </div>
                        </div>
                    </motion.p>
                    <br/>
                </div>

                <div className='bg-indigo-200 rounded-2xl'>
                    <motion.p 
                        variants={{
                            hidden: {opacity:0, y: 75},
                            visible: {opacity:1, y: 0}
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.5, delay: 0.35
                        }}
                        className='text-slate-600'> 
                        <div className='flex flex-col justify-evenly md:flex-row p-4'>
                            <div className='flex justify-center items-center p-4'>
                                <span className='pr-2'>Let's connect!</span>
                                <a href="https://www.linkedin.com/in/lucyvfr/" target='_blank' className='underline decoration-indigo-500 font-bold'>
                                    linkedin
                                </a>
                            </div>
                            <div className='flex justify-center items-center p-4'> • </div>
                            <div className='flex flex-col md:flex-row justify-center items-center p-4'>
                                <span className='pr-2'>Write me at</span>
                                <a href="mailto:info@mailgo.dev" className='font-bold'> <span className='underline decoration-indigo-500 font-bold'> lucivfr@gmail.com</span></a>
                            </div>
                        </div>
                    </motion.p>
                </div>
                
                <div>
                <div className='py-4'>
                    <p className='mt-4 text-sm font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> This website was designed & developed with Figma, Adobe Ps/Ai, ReactJs, Router, Framer, SourceTree, Github and Tailwindcss. </p>
                </div>
                </div>
                
            </div>

            <Footer />
        </section>
    )
}

export default About