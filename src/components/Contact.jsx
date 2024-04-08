import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center pt-30 px-4 pb-'>
        <form method='POST' action="https://getform.io/f/warknryb" className='flex flex-col max-w-[800px] w-full pt-64'>
            <div className='pb-0'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <div className="flex flex-wrap">
                  <p className="text-blue-300 text-xl py-4">Submit the form below or shoot me an email </p>
                  <p className="text-xl text-pink-400 py-4">  - srinivaskalyan.t20@iiits.in</p>
                </div>
            </div>
            <input className='bg-[#7484b6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#7484b6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#7484b6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact