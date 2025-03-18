"use client"
import React from 'react';
import Link from 'next/link';
import { CiStar } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full shadow-md flex justify-between items-center z-50 rounded-bottom-3 p-3' style={{ background: '#0d2e57', borderBottom: '1px solid white' }}>
      <div className='flex items-center m-2'>
        <h1 className='asd cursor-pointer ml-4 text-2xl text-white'>Mahmut Tunahan Aktaş</h1>
      </div>
      <div className='flex items-center justify-center m-4 gap-x-8 text-white'>
        {/* Link bileşenini kullan */}
        <Link href='/' className='text-xl hover:underline font-semibold cursor-pointer hover:text-underline'>
          AnaSayfa
        </Link>
        <Link href='/about' className='text-xl font-semibold hover:underline cursor-pointer'>
          Hakkımda
        </Link>
        <Link href='/myprojects' className='text-xl font-semibold hover:underline cursor-pointer'>
          Projelerim
        </Link>
        <Link href='/achievements' className='text-xl font-semibold hover:underline cursor-pointer'>
          Başarılar
        </Link>
        <Link href='/mybookcase' className='text-xl font-semibold hover:underline cursor-pointer'>

          Kitaplığım

        </Link>


        <Link href='/contact' className='text-xl font-semibold hover:underline cursor-pointer'>
          İletişim
        </Link>
      </div>
    </nav>
  )
}
