import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

const App = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const addTitle = (title:string) => {
        let newTitle={message:title}
        setMessage([newTitle,...message])
    }
    return (
        <div className={'App'}>
            <FullInput addTitle={addTitle}/>
            {message.map((elem, i) => {
                return (
                    <div key={i}>{elem.message}</div>
                )
            })}
        </div>
    );
}

export default App



