import classes from './MainImage.module.css';
import mealsImage from '../../assets/meals.jpg';

const MainImage = () => {
    return (
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
    </div>
    );
};

export default MainImage;