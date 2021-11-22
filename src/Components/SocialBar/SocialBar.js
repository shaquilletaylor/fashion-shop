import React from 'react'
import { Container, Button} from 'react-bootstrap'
import './SocialBar.css';

const SocialBar = () => {
    return (
        <Container fluid className="social-bar">
                <Button className="button-social" variant="success"><i className="fab fa-tiktok"></i></Button>
                <Button className="button-social" variant="success"><i className="fab fa-facebook"></i></Button>
                <Button className="button-social" variant="success"><i className="fab fa-instagram"></i></Button>
                <Button className="button-social" variant="success"><i className="fab fa-youtube"></i></Button>
                <Button className="button-social" variant="success"><i className="fab fa-pinterest"></i></Button>
                <Button className="button-social" variant="success"><i className="fab fa-snapchat-ghost"></i></Button>
        </Container>
    )
}

export default SocialBar
