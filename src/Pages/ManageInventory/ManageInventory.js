import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    const handleUpdate = () => {
    navigate('/updateItem')
    }
    const handleAddItem = () => {
        navigate('/addItem')
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-end align-items-center'>
                <button onClick={handleAddItem} className='btn btn-info rounded-pill px-5'>Add Item</button>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map((item,index) => <tr>
                            <td>{index + 1}</td>
                            <td>{item.user?.displayName}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.Supplier}</td>
                            <td>{item.Description}</td>
                            <td> <button onClick={()=>handleUpdate(item._id)} className='btn btn-primary'>Update</button>  </td>
                            <td> <button className='btn btn-danger'>Delete</button></td>
                          
                            </tr>)
                    }
                    <tr>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;