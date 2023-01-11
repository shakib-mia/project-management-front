import React from 'react';

const TextArea = ({ label, labelStyle, name, onChange, className, id, cols, rows, placeholder, smallText, smallTextStyle }) => {
    return <div>
        {label && <label className={labelStyle} htmlFor={id}>{label} <small className={smallTextStyle}>{smallText}</small></label>}
        <textarea name={name} onChange={onChange} className={`w-full rounded-md py-2 px-1 mt-2 ${className}`} id={id} cols={cols} rows={rows} placeholder={placeholder}></textarea>
    </div>;
};

export default TextArea;