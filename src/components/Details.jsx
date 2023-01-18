// import axios from 'axios';
import React, { useState } from 'react';
import Editable from './Editable';
// import { projectsUrl } from './links/links';

const Details = ({ name, selectedItem, setDetailsVisible, updatedSuccessFully, setUpdatedSuccessfully }) => {
    const newObject = Object.keys(selectedItem).slice(1, Object.keys(selectedItem).length - 1);
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <div className='backdrop-blur-sm w-screen h-screen absolute top-0'>
            {!successMessage && <div className="h-full flex justify-center items-center">
                <div className="bg-white w-11/12 h-2/3 lg:w-1/2 lg:h-2/3 rounded shadow-md p-6 relative animate-[fadeIn_100ms_ease-out] overflow-auto " id='modal'>
                    <span className='absolute right-2 top-0 cursor-pointer' onClick={() => setDetailsVisible(false)}>&times;</span>
                    <h1 className='text-center text-3xl font-medium'>{selectedItem.title}</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-5">
                        {newObject.map(item => item !== 'backendCode' && <Editable updatedSuccessFully={updatedSuccessFully} setUpdatedSuccessfully={setUpdatedSuccessfully} key={newObject.indexOf[item]} className="px-3 py-2 inline-block" label={item} value={selectedItem[item]} id={selectedItem._id} setSuccessMessage={setSuccessMessage} />)}
                    </div>
                </div>
            </div>}

            {successMessage && <div className="h-full flex justify-center items-center">
                <div className="bg-white w-11/12 h-2/3 lg:w-1/2 lg:h-2/3 rounded shadow-md p-6 relative animate-[fadeIn_100ms_ease-out] overflow-auto " id='modal'>
                    <span className='absolute right-2 top-0 cursor-pointer' onClick={() => setDetailsVisible(false)}>&times;</span>
                    <h1 className='text-center text-3xl font-medium my-auto'>{successMessage}</h1>
                </div>
            </div>}
        </div>
    );
};

export default Details;