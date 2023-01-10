import React from 'react';

const InputField = ({ type, name, placeholder, onchange, id, className, label, labelStyle, value }) => {
    return <div>
        {label && <label className={labelStyle} htmlFor={id}>{label}</label>}
        <input type={type} name={name} placeholder={placeholder} onChange={onchange} id={id} value={value} className={className} />
    </div>
       
};

export default InputField;