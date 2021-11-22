import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import './glide.core.min.css';
import './glide.theme.min.css';
import { Container } from 'react-bootstrap';



const SocialImages = ({ item }) => {

    const config = {
        gap: 10,
        animationTimingFunc: 'ease-in-out',
        type: 'carousel',
        perView: 4,
        startAt: 0,
        swipeThreshold: false,
        dragThreshold: false,
        breakpoints: {
            1024: {
                perView: 2
            },
            800: {
                perView: 1
            }
        }
    }



    useEffect(() => {
        const slider = document.querySelector('.glide');
        if (slider) {
            let glide = new Glide(slider, config);

            glide.mount();
        }

    });

    return (
        <>
            
            <Container>
                <h1>FEATURED SOCIAL MEDIA LOOKS</h1>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.pexels.com/photos/813283/pexels-photo-813283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </li>
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </li>
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.pexels.com/photos/947422/pexels-photo-947422.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                            </li>
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </li>
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </li>
                            <li className="glide__slide">
                                <img className="glide-image" src="https://images.pexels.com/photos/952630/pexels-photo-952630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SocialImages
