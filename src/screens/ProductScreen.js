import React from 'react'
import {  Link,useParams  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { prettyDOM } from '@testing-library/react'

function ProductScreen() {
    let { id } = useParams() // *****
 
    const product = products.find((p) => p._id == id)
    return (
    <div>
        <Link to="/" className='btn btn-light my-3'> Go Back</Link>    
        <Row>
         <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
         
         </Col>
        </Row> 
    </div>
    )
}
 
export default ProductScreen