import React from 'react'

const Signup = () => {
  return (
    <div className='min-h-screen py-6 justify-center bg-gray-200 antialiased flex flex-col sm:py-12'>
       <div className='relative py-3 sm:w-96 mx-auto text-center'>
        <h1 className='text-3xl font-light'>Create your account</h1>
            <div className='mt-5 bg-white shadow-md rounded-lg text-left'>
                <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                <div className='px-8 py-6'>
                    <label className='textlable'>Full Name</label>
                    <input type="text" placeholder="Username or Email" className="textbox"/>

                    <label className='textlable'>Phone No</label>
                    <input type="tel" placeholder="Enter Phone No" className="textbox"/>

                    <label className='textlable'>Emial</label>
                    <input type="text" placeholder="Username or Email" className="textbox"/>

                    <label className='textlable'>Password</label>
                    <input type="Password" placeholder="Password" className="textbox"/>

                    <label className='textlable'>Confirm Password</label>
                    <input type="Password" placeholder="Password" className="textbox"/>


                    <div className='flex justify-between items-baseline'>
                        <button type='submit' className='button'>SignUp</button>
                        <a href='/' className='text-sm hover:underline'>Already have account?</a>
                    </div>

                   {/* <div className='mt-3 text-center font-medium'>
                        <a href='#' className='text-sm hover:underline mt-5'>Don't have account?</a>
                   </div> */}
                </div>
            </div>
       </div>
    </div>
  )
}

export default Signup