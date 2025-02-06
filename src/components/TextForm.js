import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
    function handleUpperClick() {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }
    function handleLowerClick() {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }
    function handleClearText(){
        setText("");
        props.showAlert("Text Cleared", "success"); 
    }

    function handleExtraSpace(){
        let newText = text.split(/[ ]+/);       /* Regular Expression to split by more than one space*/
        setText(newText.join(" "));         /* Joining the array of strings by single space*/
        props.showAlert("Extra Spaces Removed", "success");
    }

    return (
        <>
            <div className="form-group container" style={{color: props.mode==='light'? 'black' : 'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea value={text} onChange={handleChange} style={{backgroundColor : props.mode  === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}  className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-dark mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleClearText}>Clear Text</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
                <h3 >Your Text Summary</h3>
                <p>{text.trim().split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length!==0 ? text : 'Please Enter the text to preview'}</p>
            </div>
        </>
    );
}


export default TextForm;
