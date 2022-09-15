import React, { useState } from "react";

export default function Convert(props) {
  const [test, setTest] = useState("");
  function touppercase() {
    setTest(test.toUpperCase());
  }
  function handleonchange(event) {
    setTest(event.target.value);
  }
  function tolowercase() {
    setTest(test.toLowerCase());
  }
  function Clear() {
    setTest("");
  }

  function Heart() {
    setTest("I love Sourav");
  }
  return (
    <>
      <h1>{props.title} </h1>
      <div className='mb-3'>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          value={test}
          onChange={handleonchange}></textarea>
      </div>
      <button
        type='button'
        className='btn btn-primary mx-2'
        onClick={touppercase}>
        Convert to UpperCase
      </button>
      <button
        type='button'
        className='btn btn-primary mx-2'
        onClick={tolowercase}>
        Convert to LowerCase
      </button>
      <button type='button' className='btn btn-primary mx-2' onClick={Heart}>
        Lisent to your Heart
      </button>
      <button type='button' className='btn btn-primary mx-2' onClick={Clear}>
        Clear the text
      </button>

      <div className='container my-3'>
        <h2>Summary:</h2>
        <p>{test}</p>
      </div>
    </>
  );
}
