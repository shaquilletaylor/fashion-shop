import React from 'react';
import { Container } from 'react-bootstrap';
import './Announcement.css';

const Announcement = () => {
    return (
        <Container fluid className="announcement">
            <div className="announcement-container">
                <div className="announcement-row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex">
                            <div className="announcment-info">
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <div className="announcement-info-text ps-3">
                                <h6 className="mb-1">Fast and Free Shipping</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex">
                            <div className="announcment-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div className="col ps-3">
                                <h6 className="mb-1">24/7 Support</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex">
                            <div className="announcment-icon">
                                <i class="fas fa-hand-point-left"></i>
                            </div>
                            <div className="col ps-3">
                                <h6 className="mb-1">30 Day Returns</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex">
                            <div className="announcment-icon">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div className="col ps-3">
                                <h6 className="mb-1">Secure Payments</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Announcement
