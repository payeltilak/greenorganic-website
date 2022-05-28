import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-headland-77959.herokuapp.com/inventories')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])
    return (
        <div className='container'>
            <h2 className='p-5 text-center'>Inventories</h2>
           <div className='row'>
           {
                inventories.slice(0,6).map(inventory =><Inventory
                key={inventory._id}
                    inventory={inventory}
                ></Inventory>)

            }
           </div>
        </div>
    );
};

export default Inventories;