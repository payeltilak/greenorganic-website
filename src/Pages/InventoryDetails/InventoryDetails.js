import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId}=useParams();
    return (
        <div>
            <h2>Inventory Details</h2>
            <button className='btn btn-primary'>Deliver</button>
        </div>
    );
};

export default InventoryDetails;