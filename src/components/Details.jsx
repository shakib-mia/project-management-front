import axios from 'axios';
import React from 'react';
import Editable from './Editable';
import { projectsUrl } from './links/links';

const Details = ({name, item, setDetailsVisible}) => {
    const update = () => {
        // console.log("object");
        axios.get(projectsUrl).then(res => console.log(res))
    }
    return (
        <div className='backdrop-blur-sm w-screen h-screen absolute top-0'>
            <div className="h-full flex justify-center items-center">
                <div className="bg-white w-1/2 h-1/2 rounded shadow-md py-5 px-2 relative animate-[fadeIn_100ms_ease-out]" id='modal'>
                    <span className='absolute right-2 top-0 cursor-pointer' onClick={() => setDetailsVisible(false)}>&times;</span>
                    <h1 className='text-center text-3xl font-medium'>{item.title}</h1>
                    {/* <Editable value={item.title} /> */}
                    <Editable className="px-3 py-2 inline-block" label="Title" value={item.title} update={update} />
                </div>
            </div>
        </div>
    );
};

export default Details;