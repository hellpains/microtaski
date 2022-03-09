import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addTitle: (title: string) => void
}
export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onChangeButton = () => {
        props.addTitle(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onChangeButton}>+</button>
        </div>
    );
};
