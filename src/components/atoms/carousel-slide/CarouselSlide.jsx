import '../../molecules/caroussel/carousel.css';
import { useNavigate } from 'react-router-dom';


function CarouselSlide(props){
    const navigate = useNavigate();

    const clickFunction = () => {
        navigate('/menu/' + props.id);
    }

    return (
        <li id={props.slideId}
                    tabIndex={props.index}
                    className="carousel__slide">
                    <div className="carousel__snapper">
                        <div className='carousel-story'>
                            <h1>{props.title}</h1>
                            <h3>{props.description}</h3>
                            <button onClick={clickFunction}>Continuar</button>
                        </div>
                        <a href={"#carousel__slide" + props.prev}
                            className="carousel__prev">Go to last slide</a>
                        <a href={"#carousel__slide" + props.next}
                            className="carousel__next">Go to next slide</a>
                    </div>
                </li>
    );

}

export default CarouselSlide;