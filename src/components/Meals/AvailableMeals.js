import { useEffect, useState } from 'react';
import DescriptionAlert from '../UI/DescriptionAlert';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Spinner from '../UI/Spinner';

// For Local (Dev) environment
// const localBaseUrl = 'http://localhost:9000';
// For Prod environment
const prodBaseUrl = 'https://react-food-order-backend.herokuapp.com';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(prodBaseUrl + '/meals');

      if (!response.ok) {
        throw new Error(`Something went wrong! Status Code ${response.status}`);
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const meal of data) {
        loadedMeals.push({
          id: meal._id,
          name: meal.name,
          description: meal.description,
          price: meal.price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <Spinner />
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <DescriptionAlert alertType="error" alertMessage={httpError}/>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
