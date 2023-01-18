import React, { useState } from 'react';
import TextArea from './TextArea';

const Editable = ({ value, className, label, update }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(value)


    return (
        label !== "_id" && <div className='w-fit'>
            <h1 className='block text-lg font-medium mb-2'>{label}:</h1>
            <div className="flex items-center">
                {edit ? <form onSubmit={e => setEdit(false)}>
                    {label === "details" ? <TextArea value={text} rows={5} cols={50} /> : <input className={`border ${className}`} onChange={e => setText(e.target.value)} value={text} />}
                </form> : <span className='bg-slate-400 px-3 py-2 rounded-sm'>{text}</span>}
                <span className='cursor-pointer ml-3' onClick={() => setEdit(true)}>
                    {!edit ? <i className="fa fa-pen"></i> : <i onClick={update} className="fa fa-check"></i>}
                </span>
            </div>
        </div>
    );
};

export default Editable;