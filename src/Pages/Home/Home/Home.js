import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Banner from '../../Banner/Banner';
import Inventories from '../../Inventories/Inventories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventories></Inventories>

      <div>
    <h2 className='fw-bold p-4'>Top Favourite Fruit Juice</h2>
 </div>

 <CardGroup className='container'>
  <Card>
    <Card.Img variant="top" src="
https://i.ibb.co/dkMChRy/juice-1.jpg" />
    <Card.Body>
    <h5>Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice</h5>
   
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/8BN63SG/juice-2.jpg" />
    <Card.Body>
<h5>Juice is prepared by mechanically squeezing or macerating sometimes referred to as cold pressed fruit or vegetable flesh without the application of heat or solvents. For example, orange juice is the liquid extract of the fruit of the orange tree, and tomato juice is the liquid that results from pressing the fruit of the tomato plant.</h5>
    
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/Dbv3WWZ/juice-3.jpg" />
    <Card.Body>
    <h5>After the juice is filtered, it may be concentrated in evaporators, which reduce the size of juice by a factor of 5, making it easier to transport and increasing its expiration date. Juices are concentrated by heating under a vacuum to remove water, and then cooling to around 13 degrees Celsius. About two thirds of the water in a juice is removed.</h5>
      </Card.Body>
    
  </Card>
</CardGroup>
<div className='container mx-auto p-4'>
    <h1>Vegitables</h1>

   <img className='w-50' src="https://i.ibb.co/xjMdxyt/vegetable-1.jpg" alt="" />

   <div className=' fw-bold ml-2 p-2'>
   Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. An alternative definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.
   </div>
</div>
        </div>
    );
};

export default Home;