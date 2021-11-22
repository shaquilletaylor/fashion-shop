import React from 'react'
import { Container,Image, Button } from 'react-bootstrap';
import './CategoryItem.css';



const CategoryItem = ({item}) => {
    return (
      <>
        <Container fluid className="categoryitem-container">
          <Image className="category-image" src={item.img} />
          <Container as="div" className="category-info">
              <h4 className="category-title">{ item.title}</h4>
              <Button className="category-button" variant="success">SHOP NOW</Button>
          </Container>
                
        </Container>
        </>
    );
}

export default CategoryItem














  // < Container fluid className = "image-container" >
  //       <Image className="image" src={item.img} />
  //       <ListGroup className="category-info">
  //         <h1 className="title">{item.title}</h1>
  //         <Button className="category-button" variant="success">SHOP NOW</Button>
  //       </ListGroup>
  //     </ >