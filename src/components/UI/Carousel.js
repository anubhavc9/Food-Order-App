import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from './Carousel.module.css';

const CarouselImages = (props) => {
    var items = props.items;

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur, prev) => {
        setIndex(cur);
    };

    return (
        <div>
            <Carousel
                index={index}
                onChange={handleChange}
                interval={3000}
                animation="slide"
                indicators={false}
                stopAutoPlayOnHover
                swipe
                className={classes['my-carousel']}
            >

                {items.map((item, i) => (
                    <img src={item.image} alt={item.name}/>
                ))}

            </Carousel>

        </div>
    );
}


export default CarouselImages;