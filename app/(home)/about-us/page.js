import Link from 'next/link'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div className='container min-h-[75vh]'>
      <div className='pt-5 flex flex-col gap-7 max-w-[900px] mx-auto'>
        <h1 className='text-center text-2xl font-semibold'>Niramoy</h1>
        <div className='text-gray-500 dark:text-gray-400 text-xl '>
          Niramoy is a social initiative to help the affected people in the student movement and the flood with medical support, funding and other possible means.
        </div>
        <div className='text-gray-500 dark:text-gray-400 text-xl '>
          It&apos;s the first project from Bikolpo, a social work collaboration community of energetic people across the country committed to work for a better Bangladesh.
        </div>
        <div className='text-gray-500 dark:text-gray-400 text-xl '>
          Join our <Link className='underline text-primary' href={"https://discord.gg/rYM4g8HsAu"}>Discord</Link> community to get involved and be a part of the initiative!
        </div>
        <div className='text-gray-500 dark:text-gray-400 text-xl'>
          Website contributors: &nbsp; 
          <Link className='underline' href={"https://www.facebook.com/dewan.asifurrahman/"}>Dewan Asifur Rahman</Link>
          ,&nbsp;
          <Link className='underline' href={"https://www.facebook.com/leon.wasiul"}>Wasiul Haque</Link>
        </div>
      </div>
    </div>
  )
}
