import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'
import './Categories.css';

const Categories = () => {
    return (
        <>
            
            <Container fluid>
                <h1>SHOP POPULAR CATEGORIES</h1>
                <Row className="categories-row">
                {categories.map(item => (
                    <Col key={item.id} sm={12} md={4} lg={4} xl={4} className="categories-column col-md-4 col-lg-4">
                        <CategoryItem item={item}  />
                    </Col>
                    ))}  
            </Row>
            </Container>
        </>
    )
}

export default Categories
