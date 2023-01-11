import React from 'react';

const ListItems = ({ item, deleteItem }) => {
    return <li className='bg-blue-400 w-full p-2 my-2 flex justify-between items-center rounded cursor-pointer' onClick={() => console.log(item)}>
        <span>{item.title}</span>
        <button className='bg-[#AB0000] text-white px-3 py-1 rounded' onClick={() => deleteItem(item._id)}>Delete</button>
    </li>;
};

export default ListItems;