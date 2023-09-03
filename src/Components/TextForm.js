import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const convertToUppercase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowercase = () => {
    setText(text.toLowerCase());
  };

  const convertLeCleartext = () => {
    let newText = '';
    setText(newText);
  };

  const copyText = () => {
    var textArea = document.getElementById("mybox");
    textArea.select();
    document.execCommand('copy');
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const minutesRead = () => {
    const words = text.split(/\s/).filter((word) => word.trim() !== '').length;
    const averageReadingSpeed = 200; // words per minute
    return (words / averageReadingSpeed).toFixed(2);
  };

  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#333333' : 'white',
    color: props.mode === 'dark' ? 'white' : '#333333',
  };

  const textareaStyle2 = {
    color: props.mode === 'dark' ? 'white' : '#333333',
  };

  return (
    <>
      <div className='container'style={textareaStyle2}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleTextChange}
            style={textareaStyle}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={convertToLowercase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={convertLeCleartext}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={removeSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={textareaStyle2}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s/).filter((word) => word.trim() !== '').length} words and {text.length} characters</p>
        <p>{minutesRead()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the textbox to preview it"}</p>
      </div>
    </>
  );
}
