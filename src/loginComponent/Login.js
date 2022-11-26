import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen py-6 justify-center bg-gray-200 antialiased flex flex-col sm:py-12'>
       <div className='relative py-3 sm:w-96 mx-auto text-center'>
        <h1 className='text-3xl font-light'>Login to your account</h1>
            <div className='mt-5 bg-white shadow-md rounded-lg text-left'>
                <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                <div className='px-8 py-6'>
                
                    <label className='textlable'>Username or Emial</label>
                    <input type="text" placeholder="Username or Email" className="textbox"/>
                    <label className='textlable'>Password</label>
                    <input type="Password" placeholder="Password" className="textbox"/>
                    <div className='flex justify-between items-baseline'>
                        <button type='submit' className='button'>Login</button>
                        <a href='#' className='text-sm hover:underline'>Forgot Password?</a>
                    </div>
                   <div className='mt-3 text-center font-medium'>
                        <a href='signup' className='text-sm hover:underline mt-5'>Don't have account?</a>
                   </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Login