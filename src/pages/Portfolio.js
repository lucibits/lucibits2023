import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link, redirect } from 'react-router-dom'
import Footer from './Footer';
import Misc from './Misc';

const Card = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <Link to={props.path}>
        <div        
            className='grid sm:grid-cols-2 py-4 md:px-32'>  
            {/* title + description     */}
            <div className='sm:flex sm:items-center sm:pl-36'>
                    <motion.div
                        variants={{
                            hidden: {opacity:0, y: 15},
                            visible: {opacity:1, y: 0}
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.35, delay: 0.15
                        }} 
                        className=''>
                        
                        <h1 className='pb-2 md:pb-4 font-serif text-3xl text-[#282828] dark:text-slate-300'>{props.title}</h1>

                        <hr/>
                        
                        <p className='mt-2 mb-8 sm:pt-2 text-base'>{props.role}</p>
                    </motion.div>
                </div>

                <div className='flex sm:p-24'>
                    <motion.div 
                        variants={{
                            hidden: {opacity:0},
                            visible: {opacity:1}
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.75, delay: 0.15
                        }}
                        className='rounded-2xl hover:shadow-2xl transition-all'>
                        <img 
                        className='rounded-2xl bg-indigo-400'
                        src={props.thumb} alt={props.alt}/>
                    </motion.div>
                </div>
            
        </div>
        </Link>
        
    )
}

const Portfolio = () => {

    let ThumbPharmacyPortal = require("../assets/pharmacy-portal-01.3.jpg" )
    let ThumbSchedule = require("../assets/schedule-04.jpg" )
    let ThumbPatientPortal = require("../assets/patient-portal-01.2.jpg" )
    let ThumbCycleScheme = require("../assets/cyclescheme-01.2.jpg" )
    let ThumbMb = require("../assets/mb-02.1.jpg" )
    let ThumbUplifter = require("../assets/uplifter-02.jpg" )

     const projects = [
        {
            title: "Healthcare SaaS platform",
            description: "Saas health care platform",
            role: "Product Designer • Design System • Front-end developer",
            thumb: ThumbMb,
            path: '/mb-design-system',
            component: 'MBDesignSystem',
        },
        {
            title: "Prescription Delivery Service",
            description: "B2B E-prescription dispensing portal",
            role: "Case Study • UI/UX Designer • Front-end developer",
            thumb: ThumbPharmacyPortal,
            path: '/medication-delivery',
            component: 'MedicationDelivery'
        },
        {
            title: "Patient & Occupational health portals",
            description: "SaaS portals - Patient Pathways integration",
            role: "UI/UX Designer • Front-end developer",
            thumb: ThumbPatientPortal,
            path: '/patient-portal',
            component: 'PatientPortal'
        },
        {
            title: "Medical Management System B2B provider",
            description: "Medical management platform scheduler for clinicians",
            role: "UI/UX Designer • Front-end developer",
            thumb: ThumbSchedule,
            path: '/schedules',
            component: 'Schedules'
        },
        {
            title: "Cyclescheme Platform",
            description: "E-commerce certificate and code redemption funnel design & integration",
            role: "UI/UX Designer • Front-end developer",
            thumb: ThumbCycleScheme,
            path: '/cyclescheme',
            component: 'Cyclescheme'
        },
        {
            title: "Uplifter AI-Powered Marketing Solutions for Business Growth",
            description: "B2B Marketing analytics audit app",
            role: "UI/UX Designer • Front-end developer",
            thumb: ThumbUplifter,
            path: '/uplifter',
            component: 'Uplifter'
        }
    ]

    return (

        <section className='scroll-smooth h-full pt-16 dark:bg-[#033F2E] dark:text-slate-300 border-t-[1px] dark:border-green-950'>

            <div className='px-4 pb-8 pt-4 md:pb-4 md:pt-8 md:px-[17rem] flex justify-left align-middle'>
                <p className='pb-4 text-4xl text-indigo-500 text-center tracking-[.2rem] font-serif italic dark:text-indigo-500'>Work</p>
                {/* text-[#FF6057] #6366f1 */}
                <Misc fillColor='#5c6bc0'/>
            </div>      
            
            <div className=' pb-16 px-4 sm:px-0'>
                <div 
                    className='grid 2xl:grid-cols-2 gap-8 md:gap-0'>
                    {projects.map((project) => (
                        
                            <Card path={project.path} 
                                    title={project.title} 
                                    description={project.description} 
                                    role={project.role}
                                    thumb={project.thumb} 
                                    alt={project.title}/>
                        
                    ))}
                </div>  
            </div>

            <Footer />     
        </section>
    )
}
 
export default Portfolio