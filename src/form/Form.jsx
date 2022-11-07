import React from 'react';
import { useState } from 'react';

const Form = () => {
    const data ={name:"",email:"",password:""};
    const [inputData,setInputData] =useState(data)
    const handleData =(e)=>{
        

    }
    return (
        <>
        <form  className="container">
        <div className="header">
            <h1>Registration Form</h1>
        </div>
        <div>
             <input type="text" placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData} ></input>
        </div>
        <div>
             <input type="email" placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData} ></input>
        </div>
        <div>
             <input type="password" placeholder='Enter your Password' name='password'value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button type='submit'>Add form</button>
        </div>
    </form>
    </>
    );
};

export default Form;