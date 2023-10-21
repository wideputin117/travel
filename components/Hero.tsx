import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
   <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-400'>
     <div className='hero-map' />
{/** Left side */}
<div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
    <Image src="/camp.svg" width={50} height={50}
      alt='camp'
      className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' />
    <h1 className='bold-52 lg:bold-88'>Uttarakhand Camp Area</h1>
    <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
    <div className='my-11 flex flex-wrap gap-5'>
        <div className=' flex items-center gap-2'>
            {Array(5).fill(1).map((_, i) => (
                <Image src="/star.svg"
                key={i}
                alt='star'
                width={24}
                height={24} 
                />

            ))}
        </div>
        <p className='bold-16 lg:bold-20 text-blue-70'>
            198K
            <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
        </p>
    </div>
    <div className='flex w-full gap-3 sm:flex-row'>
        <Button type='button' title='Download App' variant='btn_green' />
        <Button type='button' icon='/play.svg' title='How we work' variant='btn_white_text' />

    </div>
 </div>
   </section>
  )
}

export default Hero