import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';



const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='p-5'>Inventories</h2>
            <div className='row'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                      deleteButton={true}  
                    ></Inventory>)

                }
            </div>
        </div>
    );
};

export default ManageInventory;