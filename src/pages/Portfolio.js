import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from './Footer';

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
        
        <div        
            className=''>
            <Link to={props.path}>
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
                    className='rounded-lg shadow-xl hover:shadow-2xl transition-all'>
                    <img 
                    className='rounded-md w-full object-cover h-64 bg-indigo-400'
                    src={props.thumb} alt={props.alt}/>
                </motion.div>
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
                    className='p-4'>
                    <h1 className='text-2xl font-bold font-mono text-indigo-500 dark:text-indigo-300'>{props.title}</h1>
                    <p className=''>{props.description}</p>
                </motion.div>
            </Link>
        </div>
        
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
            title: "Design system",
            description: "Saas health care platform",
            thumb: ThumbMb,
            path: '/mb-design-system',
            component: 'MBDesignSystem'
        },
        {
            title: "Medication delivery portal",
            description: "B2B E-prescription dispensing portal",
            thumb: ThumbPharmacyPortal,
            path: '/medication-delivery',
            component: 'MedicationDelivery'
        },
        {
            title: "Patient & Occupational health portals",
            description: "Pathways integration to the portal",
            thumb: ThumbPatientPortal,
            path: '/patient-portal',
            component: 'PatientPortal'
        },
        {
            title: "Schedules for clinicians",
            description: "Medical management platform scheduler",
            thumb: ThumbSchedule,
            path: '/schedules',
            component: 'Schedules'
        },
        {
            title: "Cyclescheme purchase funnel",
            description: "E-commerce certificate and code redemption funnel design & integration",
            thumb: ThumbCycleScheme,
            path: '/cyclescheme',
            component: 'Cyclescheme'
        },
        {
            title: "Uplifter Analytics tool",
            description: "B2B Marketing analytics audit app",
            thumb: ThumbUplifter,
            path: '/uplifter',
            component: 'Uplifter'
        }
    ]

    return (

        <section className='portfolio h-full border-b-[1px] dark:bg-slate-900 dark:text-slate-300'>
  
            <p className='text-xl text-center font-bold tracking-[.5rem] font-mono pb-4 text-slate-700 dark:text-slate-300'>WORK</p>
            <p className='text-xl text-center pb-16 animate-bounce'>&#8595;</p>
            
            <div className='pt-16 pb-16 px-16 sm:px-32 md:px-32 lg:px-56'>
                <div 
                    className='grid gap-4 md:grid-cols-2 md:gap-16'>
                    {projects.map((project) => (
                        
                            <Card path={project.path} 
                                    title={project.title} 
                                    description={project.description} 
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