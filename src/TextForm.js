import React, { useState } from 'react'

export default function TextForm(props){

    const[text,setText] = useState('Enter Text Here');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleclear = () =>{
        let newText = "";
        setText(newText);
    }
 
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    
    return(
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} id="myBox" onChange={handleOnChange} cols="30" rows="10" className="form-control"></textarea>
            </div>
            <button className="btn-primary btn" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn-primary btn mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn-primary btn mx-2" onClick={handleclear}>Clear</button>
            <button className="btn-primary btn mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn-primary btn mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container">
            <p>You have Entered {text.split(" ").length} words and {(text.length)} Characters.</p>
        </div>

        </>
    );
}