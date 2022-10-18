import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl'>GROWING WITH DATA SCIENCE</p>
            <h1 className='md:py-6 font-bold md:text-5xl sm:text-4xl text-3xl'>Data is the new oil</h1>
            <div className='flex justify-center items-center'>
                <p className='py-4 md:text-4xl sm:text-3xl text-xl font-bold'>Fast, flexible, financing for</p>
                <Typed 
                    className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-3' 
                        strings={['BTB','BTC','SAAS']} 
                        typeSpeed={100} 
                        backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>Monitor your data analytics to increase revenue for BTB, BTC, and SASS platforms</p>
            <button type="button" className=" w-[150px] inline-block px-6 py-2.5 bg-green-500 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto">GET STARTED</button>
        </div>
    </div>
  )
}

export default Hero