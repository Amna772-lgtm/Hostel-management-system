import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signValidation from './SignUpValidation'
import axios from 'axios'


export default function SignUp() {

        //bydefault field will be empty
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: ''
    })
    
    //for navigation to login page
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.values(errors).every(error => error === '')) {
            // Clear the form by resetting values
            setValues({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmpassword: ''
            });
        }
    }, [errors]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = signValidation(values);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === '')) {
            axios.post('http://localhost:8081/SignUp', values)
                .then(res => {
                    console.log(res.data);
                    window.alert("Successfully created new user");
                    navigate('/Dashboard');
                })
                .catch(err => {
                    window.alert("Error: Something went wrong");
                    console.error("Error:", err);
                });
        }
    };
        
  return (
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
     
        <div className='p-3 rounded w-25 ' style={{ backgroundColor: '#2b98d5' }}>
            <form action="" onSubmit={handleSubmit}>
                <span>
                    <div>
                        <h1 className='mb-4' style={{backgroundColor: '#2b98d5', color: 'white', textAlign: 'center'}}>Sign Up</h1>
                    </div>
                </span>

                <div className="mb-3">
                    <label htmlFor="name" className="name-label "  style={{ color: 'white' }}><strong>Name</strong></label>
                    <input name='name' type="text" id="name" onChange={(e) => setValues({ ...values, name: e.target.value })} className='form-control rounded-0 p-1' required/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="email-label " style={{ color: 'white' }}><strong>Email</strong></label>
                    <input name='email' type="email" id="email" placeholder="name@example.com" onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0 p-1' required/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="phone-label "  style={{ color: 'white' }}><strong>Phone</strong></label>
                    <input name='phone' type="text" id="phone" onChange={(e) => setValues({ ...values, phone: e.target.value })} className='form-control rounded-0 p-1' required/>
                    {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                </div>

            
                <div className="mb-3">
                    <label htmlFor="password" className="pwd-label" style={{ color: 'white' }}><strong>Create Password</strong></label>
                    <input name='password' type="password" id="pwd" placeholder="Password must be 8 characters long"  onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0 p-1' required/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="pwd-label" style={{ color: 'white' }}><strong>Confirm Password</strong></label>
                    <input name='confirmpassword' type="password" id="confpwd" placeholder="Password must be 8 characters long"  onChange={(e) => setValues({ ...values, confirmpassword: e.target.value })}className='form-control rounded-0 p-1' required/>
                    {errors.confirmpassword && <span className='text-danger'>{errors.confirmpassword}</span>}
                </div>

            
                <button type='submit' className='btn w-100 mb-4 mt-2' style={{ backgroundColor: '#e51421', color: 'white' }}>Create User</button>
                
            </form>
        </div>       
    </div>
  )
}
