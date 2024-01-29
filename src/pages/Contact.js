import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section className='contact text-center pb-12 pt-8 py-4 px-4 md:px-64 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>
            <div className='py-12 h-[32rem]'>
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
                    className='text-3xl font-bold text-indigo-500'>
                    <span className="waving-hand">👋🏼</span> Hey there!
                </motion.h1>
                <br />
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
                    I'm Lucy, I create digital products and I am based in London. <br /><br />
                    As I have enjoyed mentoring in my past roles, I am in the process of planning and gathering my notes in design and development to transform them into my articles and experience with 
                    front-end development and design systems. <br /><br />
                    
                    After work, I like to play video games, participate in weekly gatherings playing board games and socialising, and read a monthly selection of books for both pleasure and personal development. 
                    And when I'm not at home I enjoy going on long walks and bike trips along the Thames Path. 
                    
                </motion.p>
                <br />
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
                    >Reach out if you'd like to connect or have any query! 
                    <a href="mailto:info@mailgo.dev" className='font-bold'> <span className='underline decoration-indigo-500 font-bold'>lucivfr@gmail.com</span></a>
                </motion.p>
            </div>
        </section>
    )
}

export default Contact