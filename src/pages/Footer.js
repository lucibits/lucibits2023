import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <footer className='flex justify-between text-slate-800 px-4 py-12 md:px-32 items-center dark:bg-slate-900 dark:text-slate-300 border-t-[1px] dark:border-indigo-900'>
          lucibits &copy; 2024
          <div className='flex px-2'>
          <a href="https://www.linkedin.com/in/lucyvfr/" target='_blank'>
            <Unicons.UilLinkedin className="mx-1" id="social"/>
          </a>
          <a href='https://github.com/lucibits' target='_blank'>
            <Unicons.UilGithub className="mx-1" id="social"/>
          </a>
          
          </div>
      </footer>
  )
}

export default Footer