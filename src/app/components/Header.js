import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='bg-gray-200 shadow-xl shadow-stone-300'>
        <div className='flex justify-between p-4'>
          <div>
          <Link href='/'>
              <Image src='/ipl_logo.jpg' alt='No logo' width={112} height={3}  className="w-28"/>
          </Link>
          </div>
          <div>
            <div className='navbar-toggler sm:hidden focus:ring-2 p-4 focus:ring-inset focus:ring-white'>
              <Image src='/hamburger.png' width={24} height={3}  className="h-6" alt='no Image'/>
            </div>
            <div>
                 <ul className='hidden sm:flex justify-center items-center  py-4 gap-x-5 text-2xl pr-32'>
                   <li><Link className='hover:text-red-500 border-b-2 ' href='/movie'>PointTable</Link></li>
                   <li><Link className='hover:text-red-500 border-b-2 ' href='/about'>All Teams</Link></li>
                   <li><Link className='hover:text-red-500 border-b-2 ' href='/contact'>Schedule</Link></li>
                 </ul>     
            </div> 
          </div>
        </div>
        <div className='sm:hidden border-t-2 border-stone-700 bg-gray-2 hidden' id="mobile-menu">
                <ul className='text-2xl pl-10 gap-y-6 p-3'>
                   <li><Link className='hover:text-red-500 pb-2' href='/movie'>PointTable</Link></li>
                   <li><Link className='hover:text-red-500 pb-2' href='/about'>All Teams</Link></li>
                   <li><Link className='hover:text-red-500 pb-2' href='/contact'>Schedule</Link></li>
                 </ul>   
        </div>
    </div>
      <Script src='/hamburger.js'/>
    </div>
  )
}

export default Header
