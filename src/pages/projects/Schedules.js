import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Schedules = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section>
            <div className='pt-4 md:py-16 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-[#033F2E] dark:text-slate-300 dark:border-0'>
                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.10
                    }}
                    className='pt-6 md:px-44'>
                    <h1 className='text-4xl font-serif py-2'>Medical Management System B2B provider</h1>
                </motion.div>
                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.25
                    }}
                    className='pb-6 md:px-44'>
                    <p className='text-lg py-2'>I worked as UI/UX front-end developer on the revamp of the clinicians diary and minute slots scheduler tool on the Meddbase Software.</p>
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> C#, XML, CSS, Sass, Figma components, Design systems, Postman. </p>

                </motion.div>

                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.35
                    }}
                    className='py-2 md:px-44'>
                    <img src={require("../../assets/schedule-04.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                <p className='text-base py-2 text-slate-700 dark:text-slate-300'>🔒 More on request.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>   
                </motion.div>
                
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>About the tool</h1>
                    <p className='text-lg py-2'>On the clinicians diary you can identify the status for each appointment and see the details for each appointment including:
                    <em> the scheduled start time and end time, the patient name and the appointment type.</em>
                    </p>
                    <p className='text-lg py-2'>The calendar display can be adjusted to the clinicians and clinic worload and print a diary for the clinicians day sheet session.</p>
                    <p className='text-lg py-2'>The ‘Side by side Scheduler’ view gives you an instant representation of the clinic’s workload. This view can be customised to adjust which day and the range of days being shown, as with the diary, you can also print the clinic schedule for the day, week or month.</p>
                </div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>About the software</h1>
                    <p className='text-lg py-2'>Meddbase is a B2B software that includes a full suite of healthcare management with features covering consultations, cross-organisation scheduling, patient analysis, document management, electronic referrals, pathology and reporting. The system also offers a user-friendly patient portal, automated email and SMS appointment reminders, and a built-in telemedicine platform with mobile app.</p>
                    
                </div>
                
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>My contributions</h1>
                    <p className='text-lg py-2'>Among the challenges, I also worked on other views of the Meddbase software application, providing back-end developers with prototypes and CSS code for the styling of new and revamped components</p>
                </div>
                </div>
                <Footer />
        </section>
    )
}

export default Schedules