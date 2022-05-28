import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateItem = () => {
    const {id}=useParams()
    const [item, setItem] = useState()
    
    useEffect(() => {
        const url = `http://localhost:5000/inventories/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    }, [id,item])
    
    const handleDelivered = (id) => {
        const itemQuantity=item.quantity
        const updateQuantity = itemQuantity - 1
        const quantity={...item ,quantity:updateQuantity}
        const url =`http://localhost:5000/update-inventories/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
            .then(data => {
            toast.success("Product delivered")
        })
    }
    return (
        <div>
            <img src={item?.img} alt="" />
            <p>Quantity: {item?.quantity}</p>
            <button onClick={()=>handleDelivered(item?._id)} className='btn btn-success'>Delivered</button>
            <form action="">
                <input type="text" />
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateItem;