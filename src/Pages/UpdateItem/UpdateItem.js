import React, { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



const UpdateItem = () => {
    const {id}=useParams()
    const [item, setItem] = useState()
    const quantityRef=useRef('')
    
    useEffect(() => {
        const url = `https://afternoon-headland-77959.herokuapp.com/inventories/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    }, [id,item])
    
    const handleDelivered = (id) => {
        const itemQuantity=item.quantity
        const updateQuantity = itemQuantity - 1
        const quantity={...item ,quantity:updateQuantity}
        const url =`https://afternoon-headland-77959.herokuapp.com/update-inventories/${id}`
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
    const addQuantity = (e) => {
        e.preventDefault()
        const newQuantity=parseInt(quantityRef.current.value)
        const itemQuantity = item.quantity
        const updateQuantity=newQuantity+itemQuantity
        const quantity = { ...item, quantity: updateQuantity }
        const url =`https://afternoon-headland-77959.herokuapp.com/update-inventories/${item._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type':"application/json"
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
            .then(data => {
            toast.success("Added Quantity")
            e.target.reset()
        })

    }
    return (
        <div className='row container mx-auto'>
            <div className='col-6 pt-5 '>
                <img className='w-50' src={item?.img} alt="" />
            </div>

            <div className='mr-5 col-6 pt-5'>
                <h3 className='fw-bold'>Quantity: {item?.quantity}</h3>
                <button onClick={() => handleDelivered(item?._id)} className='btn btn-success m-3'>Delivered</button>
                <form onSubmit={addQuantity}>
                    <input type="number" ref={quantityRef} /> <br/>
                    <input className='m-2' type="submit" value="Update Product" />
                </form>
            </div>

            
        </div>
    );
};

export default UpdateItem;