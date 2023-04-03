import React, { useState } from "react";


export default function TextFrom(props){
    const [text, setText] = useState('')
    function handleOnClick(e){
        console.log(e.target.value)
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    function handleOnChange(e){
        console.log(e.target.value)
        setText(e.target.value)
    }
 return (
     <div className="container">
        <div className="mb-3">
        <label for="myText" class="form-label">{props.heading}</label>
        <textarea className="form-control" id="myText" rows="3" placeholder={props.placeholderText} value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type = "button" className="btn btn-info" onClick = {handleOnClick}>
            Click Me !!!
        </button>
     </div>
 )
}