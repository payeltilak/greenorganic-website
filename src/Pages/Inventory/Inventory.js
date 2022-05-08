import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({inventory}) => {
    const navigate=useNavigate()
    const navigateToInventoryDetail=id=>{
navigate(`/inventory/${id}`)
    }
    const {name, img, price,Quantity,Supplier, Description}=inventory;
    return (
        <div className='col-md-4 col-sm-12'>
            <Card style={{ width: '18rem' }}>

  <Card.Body>
     <h2>{name}</h2>
      <img className='w-50' src={img} alt="" />
      <h3>${price}</h3>
      <h4>{Quantity}</h4>
      <h5>{Supplier}</h5>
      <p>{Description}</p>
    
    <Button onClick={navigateToInventoryDetail} variant="primary">Click Here</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Inventory;