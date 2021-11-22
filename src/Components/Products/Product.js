import React from "react";
import { Badge, Card, Container, Button, Stack } from "react-bootstrap";
import "./Product.css";


const Product = ({ item }) => {
  return (
    <>
      <Container className="product-container">
        <Card className="my-3 p-3 rounded product-card">
          <Card.Img src={item.img} variant="top" className="img-fluid" />
          <Badge className="badge" bg="danger">{'Sale'}</Badge>
          <div className="product-icons">
            <Button variant="outline-success" className="btn-icon"><i className="far fa-heart"></i></Button>
            <Button variant="outline-success" className="btn-icon"><i className="far fa-eye"></i></Button>
            <Button variant="outline-success" className="btn-icon"><i className="fas fa-shopping-bag"></i></Button>
          </div>

          <Card.Body className="product-card-info">
            <Card.Title className="product-title" as="div">
              <h5>{item.description}</h5>
            </Card.Title>
            <Stack direction="horizontal" gap={2}>
              <Card.Text className="product-price" as="div">
                <span>${item.price}</span>
              </Card.Text>
              <Card.Text className="text-muted fs-sm" as="del">$28.00</Card.Text>
            </Stack>
            <Card.Text as="div" className="size-thumbnails">
              <div className="form-check radio-text form-check-inline">
                <input className="form-check-input" type="radio" name="size3" id="btnradio1"/>
                <label className="radio-text-label" htmlFor="btnradio1">S</label>
              </div>
              <div className="form-check radio-text form-check-inline">
                <input className="form-check-input" type="radio" name="size3" id="btnradio2" />
                <label className="radio-text-label" htmlFor="btnradio2">M</label>
              </div>
              <div className="form-check radio-text form-check-inline">
                <input className="form-check-input" type="radio" name="size3" id="btnradio3" />
                <label className="radio-text-label" htmlFor="btnradio3">L</label>
              </div>
              <div className="form-check radio-text form-check-inline">
                <input className="form-check-input" type="radio" name="size3" id="btnradio4" />
                <label className="radio-text-label" htmlFor="btnradio4">XL</label>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Product;










