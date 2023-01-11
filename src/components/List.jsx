import axios from 'axios';
import React from 'react';
import spinner from './../Assets/spinner.png'
import ListItems from './ListItems';

const List = ({ data, setUpdatedSuccessfully, updatedSuccessfully }) => {
    const deleteItem = id => {
        axios.delete(`http://localhost:5000/projects/${id}`).then(res => {
            setUpdatedSuccessfully(!updatedSuccessfully)
        })
    }


    return (
        <div className='w-1/3'>
            <h1 className='text-2xl'>Present Sites</h1>
            <ul className='flex flex-col justify-center items-center'>
                {data.length ? data.map(item => <ListItems key={item._id} item={item} deleteItem={deleteItem} />) : <img className='animate-spin duration-500 w-20' src={spinner} alt="" />}
            </ul>
        </div>
    );
};

export default List;