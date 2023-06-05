import './carousel.css';
import React, { useState, useEffect } from 'react';
import CarouselSlide from '../../atoms/carousel-slide/CarouselSlide';
import { useNavigate } from 'react-router-dom';
const CONFIG = require('../../../config/roots.json');

function Carousel(){
    const navigate = useNavigate();
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch(CONFIG.url + '/stories', {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            let responseCopy = response;
            if (responseCopy.ok === false) {
                if (response.status === 403 || response.status === 401) {
                    navigate('/');
                } else {
                    Promise.reject(responseCopy);
                }
            }
            return responseCopy.json();
        })
        .then(stories => {
            const elements = [];
            for(let i = 0; i < stories.length; i++){
                
                let prev = 0;
                let next = 0;

                if(i == 0){
                    if(i != stories.length){
                        if(i + 1 <= stories.length){
                            next = i + 1;
                        }else{
                            next = stories.length;
                        }

                        if(i - 1 > 0)
                        {
                            prev = i - 1;
                        }else{
                            prev = stories.length;
                        }
                    }
                }

                let story = stories[i];
                elements.push(<CarouselSlide
                    index={i}
                    slideId={"carousel__slide"+i}
                    id={story.id}
                    title={story.title} 
                    description={story.description}
                    next={next}
                    prev={prev}/>)
            }
            setSlides(elements);
        })
        .catch(function (error) { console.error(error) });

    }, []);

    return(
        <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
                {slides}
            </ol>
        </section>
    );

}

export default Carousel;