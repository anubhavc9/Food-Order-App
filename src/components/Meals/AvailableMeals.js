import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './AvailableMeals.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        // 'https://react-http-ebcff-default-rtdb.firebaseio.com/meals.json'
        'http://localhost:9000/meals'
      );

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
      <section className='mealsLoading'>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className='mealsError'>
        <p>{httpError}</p>
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
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
