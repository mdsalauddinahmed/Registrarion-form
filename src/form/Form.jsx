import React from 'react';

const Form = () => {
    return (
        <>
        <form  className="container">
        <div className="header">
            <h1>Registration Form</h1>
        </div>
        <div>
             <input type="text" placeholder='Enter your Name' name='name' ></input>
        </div>
        <div>
             <input type="email" placeholder='Enter your Email' name='email' ></input>
        </div>
        <div>
             <input type="password" placeholder='Enter your Password' name='password' ></input>
        </div>
        <div>
            <button type='submit'>Add form</button>
        </div>
    </form>
    </>
    );
};

export default Form;