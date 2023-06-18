import React, { useState } from 'react';
import axios from 'axios';

const apiURL = "https://frontend-take-home-service.fetch.com";

const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            email: email
        };
        const api = axios.create({
            withCredentials: true
        });
        const response = await api.post(apiURL+"/auth/login", userData, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response);
       window.location.assign("/search");
    };

    return (
        <div className='container col-4 card shadow'>
        <div className='p-3'>
            <h3 className='text-center mb-3'>Login</h3>
           <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label className='form-label'>Name: </label>
            <input 
                className='form-control mb-3'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='name'
                />
            <label className='form-label'>Email: </label>
            <input 
                className='form-control mb-3'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
            />
            <button className='btn btn-primary login-btn' type='submit'>Login</button>
            </div>
           </form>
        </div>
        </div>
    );
};

export default Login;