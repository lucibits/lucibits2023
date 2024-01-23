import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'

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
                    
            className='grow'>
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
                    className='rounded-3xl hover:shadow-xl transition-all'>
                    <img 
                    className='rounded-3xl w-full object-cover h-64 self-center'
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
                    <h1 className='text-2xl font-bold text-indigo-500 dark:text-indigo-300'>{props.title}</h1>
                    <p>{props.description}</p>
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
            title: "Product design system",
            description: "Meddbase B2B software design",
            thumb: ThumbMb,
            path: '/mb-design-system',
            component: 'MBDesignSystem'
        },
        {
            title: "Medication delivery portal",
            description: "E-prescription dispensing app",
            thumb: ThumbPharmacyPortal,
            path: '/medication-delivery',
            component: 'MedicationDelivery'
        },
        {
            title: "Patient portal",
            description: "Pathways integration to the portal",
            thumb: ThumbPatientPortal,
            path: '/patient-portal',
            component: 'PatientPortal'
        },
        {
            title: "Schedules for clinicians",
            description: "Medical management scheduler",
            thumb: ThumbSchedule,
            path: '/schedules',
            component: 'Schedules'
        },
        {
            title: "Cyclescheme funnel",
            description: "Certificate and code redemption",
            thumb: ThumbCycleScheme,
            path: '/cyclescheme',
            component: 'Cyclescheme'
        },
        {
            title: "Uplifter tool",
            description: "Marketing analytics platform",
            thumb: ThumbUplifter,
            path: '/uplifter',
            component: 'Uplifter'
        }
    ]

    return (

        <section className='pb-12 pt-8 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>
            <div className='text-center'>
                <p className='text-lg pb-12 text-slate-600 dark:text-slate-300'>This preview only includes the latest work. Want to see more? <Link to="/contact"><span className='underline decoration-indigo-500 font-bold'>Let's chat</span></Link>. </p>                    
            </div>
            <div 
                className='flex px-4 flex-wrap gap-4 md:px-32'>
                {projects.map((project) => (
                    
                        <Card path={project.path} 
                                title={project.title} 
                                description={project.description} 
                                thumb={project.thumb} 
                                alt={project.title}/>
                    
                ))}
            </div>       
        </section>
    )
}
 
export default Portfolio