import Link from 'next/link'
import React from 'react'

export default function BookCasePage() {
  return (
    <div className='w-full h-screen'>
      <h1>Kitaplığım</h1>
      <ul>
        <li><Link href="/book/crimeandpunishment">Crime and Punishment</Link></li>
        <li><Link href="/book/lotr">Lord of The Rings</Link></li>
        <li><Link href="/book/oblomov">Oblomov</Link></li>
      </ul>
    </div>
  )
}

