import React, { useState } from 'react'

const TextForm = (props) => {

    let transformText;
    let [ text, setText ] = useState('');

    let handleUppercaseClick = () => {
        transformText = text.toUpperCase();
        setText(transformText)
        props.showAlert("Converted to upper case" , "success");
    };

    let handleLowercaseClick = () => {
        transformText = text.toLowerCase();
        setText(transformText)
    };

    let handleSortClick = () => {
        transformText = text;
        let transformTextArray = transformText.split(" ").sort().toString().replaceAll(","," ");
        setText(transformTextArray);
    }

    let handleCamelCaseClick = () => {
        transformText = text;
        let transformTocamel = transformText.split(" ").map((ele)=> {  
            ele = ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase())
            return ele;
        }).toString().replaceAll(","," ");;
        setText(transformTocamel);
    }

    let handleClearTextClick = () => {
        setText('');
    }

    let handleTextChange = (event) => {
        setText(event.target.value);
    }

  return (
    <>
        <div style={{ color: props.mode === 'light' ? 'black': 'white'}}>
            <h3>Enter your text in below box</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white': 'grey', 
                color: props.mode === 'light' ? 'black': 'white'}} 
                id="text-box-label" rows="8" value={text} onChange={handleTextChange} placeholder="Enter Your text here...."></textarea>
            </div>
            <button className="btn btn-primary" name="uppercase" onClick={handleUppercaseClick}>UpperCase</button>
            <button className="btn btn-primary mx-2" name="lowercase" onClick={handleLowercaseClick}>LowerCase</button>
            <button className="btn btn-primary" name="sort" onClick={handleSortClick}>Sort</button>
            <button className="btn btn-primary mx-2" name="camelcase" onClick={handleCamelCaseClick}>Camel Case</button>
            <button className="btn btn-secondary" name="uppercase" onClick={handleClearTextClick}>Clear Text</button>
        </div>
        <div className='my-3' style={{ color: props.mode === 'light' ? 'black': 'white'}}>
            <h4>Your Text Summary</h4>
            <p>Total Characters {text.length}</p>
            <p>Total Words {text.split(" ").length - 1}</p>
            <p>Total Words {text.split(/\s+/).filter( (element) => { return element.length !== 0}).length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

    </>
  )
}

export default TextForm

