import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../Hook/useItems';

const Inventory = ({ inventory }) => {
    const navigate = useNavigate()
    const { _id, name, img, price, quantity, Supplier, Description } = inventory;
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
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
  

    const navigateToAddItem = () => {
        navigate(`/addItem`)
    }
    return (
        <div className='col-md-4 col-sm-12 '>
            <Card className='shadow-lg  bg-body p-4 m-4 rounded container' style={{ width: '18rem' }}>

                <Card.Body className='bg-info'>
                    <h2>{name}</h2>
                    <img className='w-50' src={img} alt="" />
                    <h3>${price}</h3>
                    <h4>{quantity} kg</h4>
                    <h5>{Supplier}</h5>
                    <p>{Description.slice(1,100)}</p>
                    
                    <Button as={Link} to={`/updateItem/${_id}`} className="w-75 d-block mx-auto" variant="dark">Update</Button> <br />
                
                    

                    <div className='d-flex justify-content-around'>
                        <Button onClick={navigateToAddItem} variant="dark">Add to item</Button>
{/* 
                        {

                            button && */}
                            <Button variant="dark" onClick={()=>handleDelete(inventory._id)}>Delete</Button>
                        {/* } */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;