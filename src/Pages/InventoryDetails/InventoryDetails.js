import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { quantity } = inventory;

    const handleStock = (event) => {
        event.preventDefault()
        const stockValue =parseInt( event.target.addStock.value);
        let newQuantity = quantity + stockValue;
        const newInventory = { ...inventory, quantity: newQuantity }
        setInventory(newInventory)
        fetch(`https://afternoon-headland-77959.herokuapp.com/update-inventories/${inventoryId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newInventory)
            })
    }

    const handleDeliver = () => {
        let newQuantity = quantity - 1;
        const newInventory = { ...inventory, quantity: newQuantity }
        setInventory(newInventory)
        fetch(`https://afternoon-headland-77959.herokuapp.com/update-inventories/${inventoryId}`,
            {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(newInventory)
        })

    }

useEffect(() => {
        const url = `https://afternoon-headland-77959.herokuapp.com/inventories/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h2>Inventory Details</h2>

            <Card className='container shadow-lg bg-body rounded w-50'>

                <Card.Body>
                    <h2>{inventory.name}</h2>
                    <img className='w-50' src={inventory.img} alt="" />
                    <h3>{inventory.price}</h3>
                    <h4>{quantity} kg</h4>
                    <h5>{inventory.Supplier}</h5>
                    <p>{inventory.Description}</p>
                </Card.Body>


                <button onClick={handleDeliver} className='btn btn-dark w-25 m-2 mx-auto'>Deliver</button>
                <form onSubmit={handleStock}>
                    <input type="number" name="addStock" id="" placeholder='Add To Stock' />
                    <input type="submit" className='btn btn-dark w-25 m-2' value="Restock" />
                </form>


            </Card>





        </div>
    );
};

export default InventoryDetails;