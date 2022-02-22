import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LinkContainer} from 'react-router-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Col, Row, Card, Button, } from 'react-bootstrap'
import { getDatabase, ref, onValue} from "firebase/database";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const db = getDatabase();
export default function PizzaCard() {
    
        const [state, setState] = useState({loading:true, data: []});
        useEffect(() => {
          const starCountRef = ref(db, 'DataPizza');
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
             setState(  {...state, data: data, loading: false})
          });
      }, [])  
      
  return (
  <> 
  
    {!state.loading && state.data.map((item) => {
      return <>
      <Col ms={12} md={6} lg={3} className='my-5' >
      <Card className='inline-block text-white text-center'>
      <Card.Img variant="top" src={item.imgUrl} />
         

        <LinkContainer to='/'>
        <Card.Title as='h5'>{item.title}</Card.Title>
        </LinkContainer>
        
      <>
        <Row className='d-flex align-items-center m-0'/>
        <Col className='p-1  align-middle'/> 
      {item.sizes.map((item) => {
        return <li><Card.Text className='mb-0 my-3'>{ item.name } : { item.price } forint</Card.Text></li>
        
      })}
        </>  
        <Col className='p-0 d-flex justify-content-center w-100'  >
        <Button size='sm' class="addToCart" onClick="add('${DataPizza[index].id}')">
        <i className=" fs-3 bi bi-cart-plus" 
        ></i>
        </Button><Link to="/shop" className="text-white" >Shop</Link>
        
        </Col>
                     
        </Card>
        </Col>          
          
      </>   
    })}

    
    </>
    );

};

export {PizzaCard}