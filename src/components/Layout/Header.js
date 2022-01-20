import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
