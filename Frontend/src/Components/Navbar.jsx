import React from 'react'
import { Link } from 'react-router-dom'
import Anchor from './Link'

function Navbar() {
    // document.body.style.backgroundImage="url('/bgImg.jpg')"
    
  return (
    <div className=''>
      <header className="text-gray-600 body-font bg-[#9A3B3B] shadow-md shadow-red-900/70 z-10">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row  items-center">
    <Link to={'/'} className="hover:cursor-[url(/cursorFinger.png),_pointer] flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/nuxquestlogo.webp" alt="nuxquestlogo" className='w-20' />
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      {/* <span className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-600 via-zinc-800 font-semibold">NuxQuest</span> */}
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l gap-y-2 md:border-[#DE9B72] text-white flex flex-wrap items-center text-base justify-center">
    <Anchor href={'/home'} content={'Home'} exStyle={"mr-5"}/>
      <Anchor href={'/encyclopedia'} content={'Encyclopedia'} exStyle={"mr-5"}/>
           <Anchor href={'/broadcast'} exStyle={"mr-5"} content={'Broadcast'}/> 
    </nav>
 
  </div>
</header>
    </div>
  )
}

export default Navbar
