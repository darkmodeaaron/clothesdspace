import React, { useState } from 'react'

import '../styles/EmailSignUp.css'

import signUpImg from '../assets/signup.png'

function EmailSignUp() {

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length < 3) {
      alert('Please enter a valid email address.');
      return; // Do not proceed with form submission
    }

    setEmail('')
    console.log(email)
  };

  return (
    <section>
        <div className='signup-flex'>
          <div className='signup-left'>
            <img src={signUpImg} alt="" />
            <form className='signUp-form' onSubmit={handleSubmit} action="">
              <input className='signUp-input' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className='signUp-btn'>Submit</button>
            </form>
          </div>
          <div className='signup-right'>
            <h1>Sign up to our newsletter</h1>
            <h2>Fashion-forward individuals should submit to elevate their style journey through your email updates.</h2>

          </div>
        </div>
    </section>
  )
}

export default EmailSignUp
