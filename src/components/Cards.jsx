import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='px-20 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='items-center w-full bg-gray-100 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-3xl font-bold'>$99</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>    
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                </div>
                <button type="button" className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Start Trial</button>
            </div>
            <div className='items-center w-full bg-gray-200 md:my-0 my-8 shadow-2xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
                <p className='text-center text-3xl font-bold'>$159</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 4 GB</p>    
                    <p className='py-2 border-b mx-8'>800GB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted Users</p>
                </div>
                <button type="button" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Start Trial</button>
            </div>
            <div className='items-center w-full bg-gray-100 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Three Users</h2>
                <p className='text-center text-3xl font-bold'>$239</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 7 GB</p>    
                    <p className='py-2 border-b mx-8'>1TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                </div>
                <button type="button" class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards