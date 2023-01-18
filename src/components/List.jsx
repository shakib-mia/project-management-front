import axios from 'axios';
import React from 'react';
import spinner from './../Assets/spinner.png'
import { projectsUrl } from './links/links';
import ListItems from './ListItems';

const List = ({ data, setUpdatedSuccessfully, updatedSuccessfully, onClick }) => {
    const deleteItem = id => {
        axios.delete(projectsUrl+id).then(res => {
            setUpdatedSuccessfully(!updatedSuccessfully)
        })
    }


    return (
        <div className='w-full lg:w-1/3'>
            <h1 className='text-2xl'>Present Sites</h1>
            <ul className='flex flex-col justify-center items-center'>
                {data.length ? data.map(item => <ListItems onClick={() => onClick(item)} key={item._id} item={item} deleteItem={deleteItem} />) : <img className='animate-spin duration-500 w-20' src={spinner} alt="" />}
            </ul>
        </div>
    );
};

export default List;