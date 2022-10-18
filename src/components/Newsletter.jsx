import React from 'react'

function Newsletter() {
  return (
    <div className='bg-black py-16 w-full text-white px-4'>
        <div className='max-w-[1240px] mx:auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className= 'md:text-2xl sm:text-1xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p className='text-white py-2'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-3'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-2 my-4 mx-4 flex w-full rounded-md text-black' type="email" placeholder='Enter Your email'/>
                <button type="button" className=" w-[150px] inline-block px-6 py-2.5 bg-green-500 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto">Notify me</button>
                
                </div>
                <p className='text-white pt-2 mx-4'>We care about the protection of your data. Read out our <span className='text-[#00df9a]'>Privacy policy</span>.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Newsletter