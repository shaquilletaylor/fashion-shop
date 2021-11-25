import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import './NavBar.css';

export class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = { OrderIsOpen: false }
    this.state = { CategoriesIsOpen: false }
    this.state = { AccountIsOpen: false }
  }

  handleOrderOpen = () => {
    this.setState({ OrderIsOpen: true })
  }

  handleOrderClose = () => {
    this.setState({ OrderIsOpen: false })
  }

  handleCategoriesOpen = () => {
    this.setState({ CategoriesIsOpen: true })
  }

  handleCategoriesClose = () => {
    this.setState({ CategoriesIsOpen: false })
  }

  handleAccountOpen = () => {
    this.setState({ AccountIsOpen: true })
  }

  handleAccountClose = () => {
    this.setState({ AccountIsOpen: false })
  }

  render() {


    return (


      <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
        <Container className="navbar">
          <Navbar.Brand className="navbar-brand" href="#home">Fashion Shop</Navbar.Brand>
          <div className="navbar-icon-links order-lg-1 ml-auto">
            <div className="nav-item">
              <a href="index.html" className="nav-link collapsed">
                <i className="navbar-icon fas fa-search"></i>
              </a>
            </div>
            <div className="nav-item">
              <a href="index.html" className="nav-link">
                <i className="navbar-icon fas fa-shopping-bag"></i>
              </a>
            </div>
            <div className="nav-item">
              <a href="index.html" className="nav-link">
                <i className="navbar-icon far fa-user"></i>
              </a>
            </div>
            <div className="nav-item">
              <a href="index.html" className="nav-link">
                <i className="navbar-icon far fa-heart"></i>
              </a>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="nav">
              <Nav.Link className="nav-links" href="#home">
                Home
              </Nav.Link>
              <NavDropdown 
                onMouseEnter={this.handleOrderOpen}
                onMouseLeave={this.handleOrderClose}
                show={this.state.OrderIsOpen}
                title="Order" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Track Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shopping Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Checkout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Order History</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                onMouseEnter={this.handleCategoriesOpen}
                onMouseLeave={this.handleCategoriesClose}
                show={this.state.CategoriesIsOpen}
                align="center" title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">OuterWear</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Active Wear</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Sweaters</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                onMouseEnter={this.handleAccountOpen}
                onMouseLeave={this.handleAccountClose}
                show={this.state.AccountIsOpen}
                title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Forgot Password</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Wishlist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Account</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
         
          
        </Container>
      </Navbar>

    );
  }
};

export default Header;
