import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import {Link } from "react-router-dom";
import Hero from './Hero'
import Portfolio from './Portfolio'
import * as Unicons from '@iconscout/react-unicons';

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
        <section className='py-32 px-8 md:px-32 md:py-36 md:pt-24 md:pb-24 text-slate-700 dark:bg-slate-900 dark:text-slate-300 transition-colors duration-400'>
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
                    className='text-4xl font-bold mb-6 text-indigo-500 dark:text-violet-200 text-gradient-1'>Hey! Welcome to my digital space.
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
                    
                    I am Lucy, a London-based <span className='font-bold'>UI/UX Software Designer</span> and <span className='font-bold'>Front-end Developer</span>.
                    My work consists of a range of unique functional user-centered products designed and developed with both users' and stakeholders' needs in mind.<br/><br/> 

                    My skill set includes <span className='italic'>wireframing</span> and <span className='italic'>prototyping</span>, <span className='italic'>Web design/ development</span>, <span className='italic'>design systems</span>, <span className='italic'>IOS design</span>, <span className='italic'>sketching</span>, <span className='italic'>illustration</span>, <span className='italic'>branding and identity</span>, <span className='italic'>maintenance and performance</span>. <span className='italic'>Mentoring</span> and <span className='italic'>team building</span>.
                    Tools I use: <span className='italic'>Figma</span> and <span className='italic'>Adobe Suite</span>. <span className='italic'>ReactJs, VueJs, AngularJs, TypeScript, Sass, BEM, WordPress, Source Control</span>, to name a few. <br/><br/>

                    With a rich background in serving both businesses and private clients, I bring a unique blend of creativity and technical proficiency to every project. 
                    Take a peek at my latest work, where design meets <span className='italic text-indigo-700'>functionality, responsiveness</span> and <span className='italic text-indigo-700'>accessibility </span>
                    tailored for a diverse range of industries such as <span className='italic'>healthcare patient portals</span>, <span className='italic'>cycle schemes</span>, <span className='italic'>marketing and analytics</span> among others. 
                    And previous experience involving <span className='italic'>social media apps</span> and <span className='italic'>gaming platforms</span>.
                    
                </motion.p>
                
        </section>
    )
}

const Home = () => {
    return (
        <>
            <Header />
            {/* <Hero /> */}
            <Portfolio />
        </>
    )
}

export default Home