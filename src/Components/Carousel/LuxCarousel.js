import React from 'react';
import { Carousel, Container, Button} from 'react-bootstrap';
import './LuxCarousel.css';


const LuxCarousel = () => {
    return (
    
        <Container fluid className="carousel-holder">
            <Carousel fade className="luxcarousel-container">
                <Carousel.Item>
                    <img
                        className="image-carousel"
                        src="https://images.unsplash.com/photo-1575376653281-1632fc9c61f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Luxury Purses"
                    />
                    <Carousel.Caption>
                        <h3>Marietta Luxury Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image-carousel"
                        src="https://images.unsplash.com/photo-1604025435272-024fa888d1e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1638&q=80"
                        alt="Luxury Shoes"
                    />

                    <Carousel.Caption>
                        <h3>Plush Luxury Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image-carousel"
                        src="https://images.unsplash.com/photo-1635870224948-01dd421f1cb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Luxury Cosmetics"
                    />

                    <Carousel.Caption>
                        <h3>Clarion Luxury Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
          
    )
}

export default LuxCarousel














    