import React from 'react';

const ListItems = ({ item, deleteItem, onClick }) => {
    return <li className='bg-primary text-light w-full p-2 my-2 flex justify-between items-center rounded cursor-pointer' onClick={onClick}>
        <span>{item.title}</span>
        <button className='bg-danger text-light px-3 py-1 rounded' onClick={e => {
            e.stopPropagation();
            deleteItem(item._id);
        }}>Delete</button>
    </li>;
};

export default ListItems;