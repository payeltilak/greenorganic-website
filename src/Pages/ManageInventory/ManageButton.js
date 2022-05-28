import React from 'react';
import { Link } from 'react-router-dom';
import './ManageButton.css';

const ManageButton = () => {
    return (
        <div>
            <div className='button mb-4'>
                <Link to={`/manageInventory`}><button className='btn btn-dark mt-3 '>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default ManageButton;