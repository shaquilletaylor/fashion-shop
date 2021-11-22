import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Products.css';
import { dealProducts} from '../../data'
import Product from './Product';


const Products = () => {
    return (
        <>
           
            <Container className="productscontainer">
                <h1>SHOP NEW DEALS</h1>
                <Row>
                {dealProducts.map(item => (
                    <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                        <Product item={item}  />
                    </Col>
                ))}
                </Row>
            </Container>
            
        </>
    )
}

export default Products





















