import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark footer">
            <div className="footer-top py-6">
                <div className="container">
                    <div className="footer-row">
                        <div className='col-sm-6 col-lg-4 my-3'>
                            <div className="pb-3">
                                <Navbar.Brand className="footer-img-logo" href="#home">Fashion Shop</Navbar.Brand>
                            </div>
                            <address className="footer-links mb-4">
                                <p className="text-white-85 mb-2">
                                    123 Some Street Name,
                                    <br />
                                    City, State, Zip Code
                                </p>
                                <p className="mb-2">
                                    <a className="" href="mailto:info@thecreolewebcafe.com">info@thecreolewebcafe.com</a>
                                </p>
                                <p className="text-white-85 mb-2">
                                    555-555-5555
                                </p>
                            </address>
                            <div className="nav footer-links fs-5">
                                <a className="footer-links me-3" href="index.html"><i class="fab fa-facebook"></i></a>
                                <a className="footer-links me-3" href="index.html"><i class="fab fa-twitter"></i></a>
                                <a className="footer-links me-3" href="index.html"><i class="fab fa-instagram"></i></a>
                                <a className="footer-links me-3" href="index.html"><i class="fab fa-snapchat"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 my-3">
                            <h6 className="text-white text-uppercase mb-5">Support</h6>
                            <ul className="list-unstyled footer-links footer-link-1 m-0">
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Help</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Contact Us</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Feedback</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Size Guide</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Track Order</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-2 my-3">
                            <h6 className="text-white text-uppercase mb-5">Policies</h6>
                            <ul className="list-unstyled footer-links footer-link-1 m-0">
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Privacy Policy</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Terms of Use</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Gift Cards</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Shipping</a>
                                </li>
                                <li className="pb-2">
                                    <a className="footer-links" href="index.html">Returns</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 my-3">
                            <h6 className="text-white text-uppercase mb-5">Stay Informed</h6>
                            <p className="text-white-85">Subscribe to our newsletter to receieve discount offers, updates, and new product info.</p>
                            <form>
                                <div className="d-flex flex-column flex-md-row mb-2">
                                    <input type="email" className="form-control me-md-2 mb-2 mb-md-0" placeholder="Enter your email" />
                                    <button className="btn btn-success flex-shrink-0" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom py-2">
                <div className="container">
                        <div className="col-md-6 py-1">
                            <p className="copyright m-0">© 2021 Copyright by the creole web cafe</p>
                        </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
