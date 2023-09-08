import React, { useState } from 'react';
import { Send, SendOutlined } from '@mui/icons-material';
const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(isValidEmail(newEmail));
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]">
      <h1 className="text-[50px] font-bold">NEWSLETTER</h1>
      <h2 className="text-[20px] mt-2 mobile:text-center mobile:p-3">
        Always in touch with us, for your favourite Products.
      </h2>
      <div className="flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        {/* <input
          className={
            `border-none pl-[20px] w-[280px] ` + isValid ? 'valid' : 'invalid'
          }
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        /> */}
        <input
          style={{
            border: 'none',
            paddingLeft: '20px',
            display: 'flex',
            flex: '8',
            outline: 'none',
          }}
          className={isValid ? 'valid' : 'invalid'}
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <button className="bg-[#4caf50] flex-1 h-[100%]">
          <Send className="text-white" />
        </button>
      </div>
      {!isValid && (
        <p className="error-message text-red-500">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default NewsLetter;
