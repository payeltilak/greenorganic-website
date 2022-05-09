import React from 'react';
import { useForm } from "react-hook-form";



const AddItems = () => {
    
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => 
    {
         console.log(data);
         const url=`https://afternoon-headland-77959.herokuapp.com/inventories`
         fetch(url,{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(result=>{
             console.log(result);
         })
    }
    return (
        <div className='w-75 mx-auto'>
            <h2>Add  product</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder='email' type="text" {...register("email")} />
      <input className='mb-2' placeholder='Name' {...register("user.displayName", { required: true, maxLength: 20 })} />

      <input className='mb-2' placeholder='Photo URl' type="text" {...register("img")} />
      <input className='mb-2' placeholder='price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Supplier' {...register("Supplier")} />
      <input className='mb-2' placeholder='Description' {...register("Description")} />
      <input className='mb-2' type="Submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItems;