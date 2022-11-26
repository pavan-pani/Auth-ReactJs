import React from 'react'
import { Formik, Form, useFormik, Field, ErrorMessage } from 'formik'

const initialValues={
      name:'',
      // phoneNo:1234567890,
      email:'',
      password:'',
      confirmPassword:''
  }

  const onSubmit=values=>{
    console.log('form data', values);
  }
  const validate=values=>{
    let errors={}
    
    if(!values.name){
      errors.name='This field is required'
    }

    // if(!values.phoneNo){
    //   errors.phoneNo='This field is required'
    // } else if(isNaN(values.phoneNo)){
    //   errors.phoneNo='Please enter a valid Phone Number'
    // }
    // else if((values.phoneNo).toString().length!==10)
    // {
    //   errors.phoneNo='Phone Number should be 10 digit only '
    // }

    if(!values.email){
      errors.email='This field is required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email='Invalid email format'
    }

    if(!values.password){
      errors.password='This field is required'
    }
    else if((values.password).length<=5){
      errors.password='Password length must be more then 5 charecter'
    }

    if(!values.confirmPassword){
      errors.confirmPassword='This field is required'
    }
    else if(values.password!==values.confirmPassword){
      errors.confirmPassword='Password not matched'
    }
    return errors
  }

const Signup = () => {

  // const formik=useFormik({
  //   initialValues,
  //   onSubmit,
  //   validate
  // })

  // console.log('form error', formik.errors);

  return (
    <div className='min-h-screen py-6 justify-center bg-gray-200 antialiased flex flex-col sm:py-12'>
       <div className='relative py-3 sm:w-96 mx-auto text-center'>
        <h1 className='text-3xl font-light'>Create your account</h1>
            <div className='mt-5 bg-white shadow-md rounded-lg text-left'>
                <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                  <div className='px-8 py-6'>

                    <Formik 
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}>
                      <Form>
                          <label className='textlable'>Full Name</label>
                          <Field type="text" placeholder="Enter your name" className="textbox" name='name' />
                          <ErrorMessage name='name' component="div" className=' text-red-500'/>
                          {/* <label className='textlable'>Phone No</label>
                          <input type="tel" placeholder="Enter Phone No" className="textbox" name='phoneNo'
                            onChange={formik.handleChange} value={formik.values.phoneNo}
                          /> */}

                          <label className='textlable'>Emial</label>
                          <Field type="text" placeholder="Enter your Email" className="textbox" name='email' />
                          <ErrorMessage name='email' component="div" className=' text-red-500'/>

                          <label className='textlable'>Password</label>
                          <Field type="Password" placeholder="Enter Password" className="textbox" name='password' />
                          <ErrorMessage name='password' component="div" className=' text-red-500'/>

                          <label className='textlable'>Confirm Password</label>
                          <Field type="Password" placeholder=" Confirm Password" className="textbox" name='confirmPassword' />
                          <ErrorMessage name='confirmPassword' component="div" className=' text-red-500'/>

                          <div className='flex justify-between items-baseline'>
                              <button type='submit' className='button'>SignUp</button>
                              <a href='/' className='text-sm hover:underline'>Already have account?</a>
                          </div>

                          {/* <div className='mt-3 text-center font-medium'>
                                <a href='#' className='text-sm hover:underline mt-5'>Don't have account?</a>
                          </div> */}
                        </Form>
                      </Formik>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Signup