import React from 'react';
import Editable from './Editable';

const Details = ({name, item, setDetailsVisible}) => {
    return (
        <div className='backdrop-blur-sm w-screen h-screen absolute top-0'>
            <div className="h-full flex justify-center items-center">
                <div className="bg-white w-1/2 h-1/2 rounded shadow-md py-5 px-2 relative animate-[fadeIn_100ms_ease-out]" id='modal'>
                    <span className='absolute right-2 top-0 cursor-pointer' onClick={() => setDetailsVisible(false)}>&times;</span>
                    <h1 className='text-center text-3xl'>{item.title}</h1>
                    {/* <Editable value={item.title} /> */}
                    <Editable label="Title" value={item.title} />
                </div>
            </div>
        </div>
    );
};

export default Details;