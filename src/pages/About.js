import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { ArrowRight } from './Misc';
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
   
        <section className=' h-full pt-4 sm:pt-16 pb-24 dark:bg-[#033F2E] dark:text-slate-300'>
            <div className='grid gap-16 text-xl pb-12 pt-8 py-4 px-8 md:px-72 xlg:px-80'>

            
                <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex justify-center items-center md:justify-start'>
                        <motion.p>
                            <img src={Img} alt="An image about something" className='rounded-2xl w-96'/>
                        </motion.p>
                    </div>
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
                            className='mt-4 mb-8 md:mt-0 text-4xl dark:text-slate-100'>
                            <span className="waving-hand">👋🏼</span> 
                            <span className='font-serif'> Hi, nice to meet you!</span>
                        </motion.h1>
                    {/* </div>
                    <div> */}
                    
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
                            className='mt-4 leading-8 text-slate-700 dark:text-slate-100'>
                            I'm Lucy, and London has been my home for the past decade.<br/><br/>
                            In my free time, I enjoy playing video or board games, exploring various artistic mediums, reading, and playing the piano.
                            <br/><br/>
                            Living in London means indoor activities for much of the year. However, when sunny days arrive, you'll find me biking along the Thames Path, enjoying picnics in the park with my cat, or embarking on day trips around England by train. 
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
                        className='leading-8'>
                        <h1 className='mt-4 mb-8 text-3xl font-serif dark:text-slate-100'>How do I maintain myself up-to-date?</h1>
                        <div className='flex flex-col md:flex-row gap-4 '>
                            <div>
                                <span className='text-slate-700 dark:text-slate-100'>I'm a member of a couple of reading book clubs which gives me the opportunity of reading a monthly selection of books for both pleasure and professional development. </span>
                                <br/><br/>
                                <span className='text-slate-700 dark:text-slate-100'>A member of PD and UX women groups in tech and other Dev groups, where we discuss the market and share resources.  </span>

                            </div>
                        </div>
                    </motion.p>
                    <br/>
                </div>

                <div className='bg-indigo-100 rounded-2xl border-2 border-stone-900'>
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
                        className='text-slate-800'> 
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

                <div className='py-4 flex align-top'>

                    <p className='mt-4 text-sm font-mono dark:text-slate-300'><strong className='text-indigo-500 text-2xl'>⟶</strong> This website was designed & developed with Figma, Adobe Ps/Ai, ReactJs, Router, Framer, SourceTree, Github and Tailwindcss. </p>
                </div>
                </div>
                
            </div>

            <Footer />
        </section>
    )
}

export default About