import React, { useState } from 'react';

const Editable = ({ value, className }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(value)


    return (
        <div className='flex justify-between items-center w-20'>
            {edit ? <form onSubmit={e => setEdit(false)}>
                <input className={`w-fit ${className}`} onChange={e => setText(e.target.value)} value={text} />
            </form> : <span>{text}</span>}
            <span className='w-fit cursor-pointer' onClick={() => setEdit(true)}>edit</span>
        </div>
    );
};

export default Editable;