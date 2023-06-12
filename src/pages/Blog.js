import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const Blog = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section 
             
            className='text-center pb-12 pt-8 py-4 px-4 md:px-64 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>
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
                    <span className="waving-hand">☕</span> Coming soon!
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
                >At the moment, I am working on my blog. Reach out for collabs to 
                    <a href="mailto:info@mailgo.dev" className='font-bold'> <span className='underline decoration-indigo-500 font-bold'>heylucibits@gmail.com</span></a>
                </motion.p>
            </div>
        </section>
    )
}

export default Blog