import React from 'react';

const ListItems = ({ item, deleteItem }) => {
    return <li className='bg-blue-400 w-full p-2 my-2 flex justify-between'>
        <span>{item.title}</span>
        <button onClick={() => deleteItem(item._id)}>Delete</button>
    </li>;
};

export default ListItems;