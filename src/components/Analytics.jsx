import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full px-4 bg-white py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='justify-center flex flex-col'>
                <p className='text-[#00df9a] font-bold uppercase'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className='pb-4'>The transformation to a data-driven company often starts with enterprise data management. After all, this first step is often the biggest challenge. As a basis for a smooth start and also as a foundation for the entire life cycle of all data projects, a long-term and future-proof data management strategy helps to avoid mistakes and unnecessary costs.</p>
                <button type="button" className=" w-[150px] inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0">GET STARTED</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics