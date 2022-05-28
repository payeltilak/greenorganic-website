import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        fetch('https://afternoon-headland-77959.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories])

    const handleUpdate = (id) => {
        navigate(`/updateItem/${id}`)
    }
    const handleAddItem = () => {
        navigate('/addItem')
    }
    const handleDelete = (id) => {
        const confirm=window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://afternoon-headland-77959.herokuapp.com/inventories/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Item deleted");
                })
       }
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
                            <td> <button onClick={()=>handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;