import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { projectsUrl } from './links/links';
import TextArea from './TextArea';

const Editable = ({ value, className, label, id, setSuccessMessage, updatedSuccessFully, setUpdatedSuccessfully }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(value);

    const [newLabel, setNewLabel] = useState("");

    useEffect(() => {
        const newArr = [];
        const upperCase = /([A-Z])/g;
        const arr = label.split("");
        arr.map(item => newArr.push(upperCase.test(item)))

        if (newArr.indexOf(true) > -1) {
            arr.splice(newArr.indexOf(true), 0, " ")
            setNewLabel(arr.join(""));
        }
    }, [label])

    const update = (label) => {
        setEdit(false);
        axios.put(projectsUrl + id, {
            field: label,
            updatedDoc: text
        }).then(res => {
            setSuccessMessage(res.data.message);
            setUpdatedSuccessfully(true);
        })
    }

    return (
        label !== "_id" && <div className='w-full'>
            <h1 className='block text-lg font-medium capitalize mb-2'>{label === "title" ? label : newLabel}:</h1>
            <div className="flex items-center gap-0">
                {edit ? <form className='w-full' onSubmit={(e) => {
                    e.preventDefault();
                    update(label);
                }}>
                    {label === "details"
                        ? <TextArea className="w-full" value={text} rows={5} cols={50} />
                        : <input className={`border w-full ${className}`} onChange={e => setText(e.target.value)} value={text} />}
                </form>
                    : <div className='bg-slate-400 w-full px-3 py-2 rounded-sm'>
                        {text?.includes("<br>")
                            ? <ul>
                                {text?.split("<br>").map(item => <li>{item}</li>)}
                            </ul>
                            : text.includes("https")
                                ? <a href={text} target="_blank" rel='noreferrer'>{text}</a>
                                : text}
                    </div>}
                <span className='cursor-pointer ml-3'>
                    {!edit
                        ? <i onClick={() => setEdit(true)} className="fa fa-pen"></i>
                        : <i onClick={() => update(label)} className="fa fa-check"></i>}
                </span>
            </div>
        </div>
    );
};

export default Editable;