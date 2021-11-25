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
                        <h3>Luxury Purse Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image-carousel"
                        src="https://images.pexels.com/photos/3769858/pexels-photo-3769858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Luxury Shoes"
                    />

                    <Carousel.Caption>
                        <h3>Luxury Shoe Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image-carousel"
                        src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Luxury Cosmetics"
                    />

                    <Carousel.Caption>
                        <h3>Luxury Jewelry Collection</h3>
                        <Button variant="outline-success">SHOP COLLECTION</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
          
    )
}

export default LuxCarousel














    