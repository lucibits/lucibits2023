import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import Portfolio from './Portfolio'

const Header = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section className='pt-4 sm:pt-16 pb-24 px-8 text-slate-700 dark:bg-slate-900 dark:text-slate-300 transition-colors duration-400'>
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
                    className='text-[#FF6057] dark:text-violet-200 py-16 px-4 sm:px-24 md:px-32 lg:px-48'>
                    <span className='text-6xl leading-[4.6rem] font-bold'>Hi, I'm Luciana,<br/>but you can <em>call me Lucy</em>.</span>     
                    <br/><br/>
                    <span className='text-4xl font-mono leading-[3.2rem]'>I'm a UI/UX Product designer and Front-end developer passionate about helping clients and organisation transform user problems into seamless experiences.</span>
                </motion.h1>      
        </section>
    )
}

const Home = () => {
    return (
        <>
            <Header />
            <Portfolio />
        </>
    )
}

export default Home