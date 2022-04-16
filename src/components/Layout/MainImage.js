import classes from './MainImage.module.css';
import italian from '../../assets/italian.jpeg'

const MainImage = () => {
    return (
    <div className={classes['main-image']}>
        <img src={italian} alt='Italian cuisine' />
    </div>
    );
};

export default MainImage;