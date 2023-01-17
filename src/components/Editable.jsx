import React, { useState } from 'react';
import TextArea from './TextArea';

const Editable = ({ value, className, label }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(value)


    return (
        label !== "_id" && <div className='flex justify-between items-center w-fit gap-6'>
        <span>{label}</span>
        {edit ? <form onSubmit={e => setEdit(false)}>
            {label === "details" ? <TextArea value={text} rows={5} cols={50} /> : <input className={`border ${className}`} onChange={e => setText(e.target.value)} value={text} />}
        </form> : <span>{text}</span>}
        <span className='cursor-pointer' onClick={() => setEdit(true)}>edit</span>
    </div>
    );
};

export default Editable;