import React, { useState } from 'react';

function Index() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    window.location.href = 'https://app.loch.one/welcome';
  };

  return (
    <div className='signup_container'>
      <h3>Sign up for exclusive access.</h3>
      <input
        type="text"
        placeholder='Your email address'
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSubmit}>Get started</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>You’ll receive an email with an invite link to join.</p>
    </div>
  );
}

export default Index;
