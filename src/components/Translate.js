import React , { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';


const options = [
    {
        label: 'Afrikaans' ,
        value: 'af'
    } ,
    {
        label: 'Arabic' ,
        value: 'ar'
    } ,
    {
        label: 'Hindi' ,
        value: 'hi'
    } ,
    {
        label: 'Dutch' ,
        value: 'nl'
    }
]

const Translate = (props) => {
    const [language , setLanguage] = useState(options[0]);
    const [text , setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} type="text"  />
                </div>
            </div>
            
        <DropDown
        label="Select a Language"
        onSelectedChange={setLanguage}  
        selected={language} 
        options={options} />

        <hr />
        <h3 className="ui header">output</h3>
        <Convert text={text} language={language} />

        </div>
    );
}

export default Translate;