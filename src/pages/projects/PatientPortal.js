import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'

const PatientPortal = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section className='py-4 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-slate-900 dark:text-slate-300 dark:border-0'>
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
                    <h1 className='text-3xl text-indigo-500 font-mono font-bold py-2'>Patient Portal</h1>
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
                    <p className='text-lg py-2'>As a UI developer I worked on the integration of new features to the Meddbase Patient and Occupational Health portals for clients using them such as <strong>Bupa</strong>, <strong>HCAHealthcareUK</strong>, <strong>NHS</strong>, <strong>Maximus</strong>, <strong>UnitedHealthcare Global</strong>, <strong>FortiusClinic</strong> among others throughout the pandemic.</p>
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> Figma, Design systems, Postman, AngularJs, Bootstrap, responsive, WCAG Accessiblity guidelines. </p>

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
                    <img src={require("../../assets/patient-portal-01.2.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                    <p className='text-lg py-2 text-slate-600'>More about this on request as this project falls under NDA.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>                 
                    </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold font-mono py-2'>Pathways integration</h1>
                    <p className='text-lg py-2'>The portals are built in AngularJs and bootstrap. One of the main integrations to the portals I worked on was the patient facing Pathways integration, which allow patients to interact directly with the Pathway via the Patient Portal. Patients are given access to the tasks shared with them and see these tasks available in the home page of the patient facing portal.</p>
                    <p className='text-lg py-2'>Patients can access all their available tasks by going to the 'Tasks' main page in the Patient Portal. There are various types of tasks such as general, answer questionnaires, book appointments, make decision, request documents, among others.</p>
                    <img src={require("../../assets/patient-portal-pathways-01.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                <p className='text-lg py-2 text-slate-600'>More about this on request as this project falls under NDA.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>   
                </div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold font-mono py-2'>My contributions</h1>
                    <p className='text-lg py-2'>Among the challenges, I also worked on bug fixing and reducing code debt as well as to enhance the existing code and refactor it for customisations such as colour scheme, feature flags, required fields among other implementations. </p>
                    <p className='text-lg py-2'>This customisation allowed the operation teams to easily transform the portal to the clients needs without the need of the involvement of the development team.</p>
                    <p className='text-lg py-2'>I also contributed to the knowledge base and How to articles (using Sharepoint) with tutorials for my teammates on these enhancements, making them more independent.</p>
                </div>

        </section>
    )
}

export default PatientPortal