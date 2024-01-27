import React, { useState } from 'react';
import axios from 'axios';
import loginValidation from './LoginValidation';

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input fields
        const validationErrors = loginValidation(values);
        setErrors(validationErrors);

        // Check if there are validation errors before making the request
        if (!validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/login', { email: values.email, password: values.password })
                .then(res => {
                    console.log(res.data);
                    if (res.status === 200) {
                        // Redirect to the Dashboard if login is successful
                        window.location.href = res.data.redirectTo;
                    } else if (res.status === 401 && res.data.error === "No record found") {
                        // Show an alert if the status is 401 (Unauthorized) and error is "No record found"
                        window.alert("Record not found");
                    } else {
                        // Handle other specific server errors
                        window.alert("Record not found");
                    }
                })
                .catch(err => {
                    if (err.response) {
                        // Server responded with a status code outside of 2xx range
                        if (err.response.status === 400 && err.response.data.error === "Pattern mismatch") {
                            // Show an alert if the status is 400 (Bad Request) and error is "Pattern mismatch"
                            window.alert("Invalid pattern for email or password");
                        } else {
                            // Handle other server errors with specific status codes
                            window.alert("Record not found");
                        }
                    } else if (err.request) {
                        // The request was made but no response was received
                        window.alert("No response received from server");
                    } else {
                        // Something happened in setting up the request that triggered an error
                        window.alert("An error occurred while processing your request");
                    }
                    console.log(err);
                });
        }
    };

  return (
    
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
     
        <div className='p-3 rounded w-25' style={{ backgroundColor: '#2b98d5' }}>
            <form action="" onSubmit={handleSubmit}>
               <span>
                    <div>
                        <h1 className='mb-4' style={{ backgroundColor: '#2b98d5', color: 'white', textAlign: 'center'}}>Admin Login</h1>
                        </div>
                </span>
                <div className="mb-3">
                    <label htmlFor="email" className="email-label " style={{ color: 'white' }}><strong>Email</strong></label>
                    <input name='email' type="email" id="email" placeholder="name@example.com" onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0 p-1'required/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                <div>
                <div className="mb-2">
                    <label htmlFor="password" className="pwd-label" style={{ color: 'white' }}><strong>Password</strong></label>
                    <input name='password' type="password" id="pwd" placeholder="Password must be 8 characters long" onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0 p-1' required/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                    <div style={{color:'white', fontSize: '13px'}}className='forgot-pwd mb-4'>Forgot Password? <span style={{color:'white', fontSize: '13px', cursor:'pointer', textDecoration: 'underline'}}>Reset</span>
                    </div>
            
                </div>
                <button type='submit' className='btn w-100 mb-4' style={{ backgroundColor: '#e51421', color: 'white' }}>Login</button>
                
            </form>
        </div>
    </div>
    
  )
}
