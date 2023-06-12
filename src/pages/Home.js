import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import {Link } from "react-router-dom";
import Hero from './Hero'

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
        <section className='py-32 px-8 md:px-32 md:py-44 text-slate-700 dark:bg-slate-900 dark:text-slate-300 transition-colors duration-400'>
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
                    className='text-4xl font-bold mb-2 text-indigo-500 dark:text-violet-200 text-gradient-1'>Hey! I'm Lucy.
                </motion.h1>

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
                    className='text-2xl leading-10'>
                    I'm a <span className='font-bold'>UI/UX product designer</span> and 

                    <span className='font-bold'> Front-end developer</span> in London. <br/>
                    I make human centered minimal <Link to="/portfolio">
                        <span className='underline decoration-indigo-500 font-bold'>products</span>
                    </Link> and I am starting to <Link to="/blog"><span className='underline decoration-indigo-500 font-bold'>write</span></Link> about code and design. <br />
                </motion.p>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
        </>
    )
}

export default Home