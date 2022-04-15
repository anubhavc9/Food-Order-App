import { useCallback, useEffect, useState } from 'react';
import classes from './MealsSummary.module.css';

const mainHeadings = ['Unexpected guests?', 'Cooking gone wrong?', 'Game night?', 'Movie marathon?', 'Late night at office?', 'Midnight craving?', 'Hungry?'];
var i = 0; // counter to loop thorugh the mainHeadings

const MealsSummary = () => {
  const [mainHeading, setMainHeading] = useState('Hungry?');

  const nextHeading = useCallback(() => {
    setMainHeading(mainHeadings[i % mainHeadings.length]);
    i++;
    if(i === mainHeadings.length) {
      i = 0;
    }
  },[]);

  useEffect(() => {
    const intervalID = setInterval(nextHeading, 4000);
    return () => clearInterval(intervalID);
  }, [nextHeading]);

  return (
    <section className={classes.summary}>
      <h2>{mainHeading}</h2>
      <p>Order fresh & delicious food, right at your doorstep.</p>
      <p>
        We serve all different kinds of cusines. Each dish is curated & prepared by our highly-skilled chefs.
        And we only use bio-degradeable packaging & cutlery.
      </p>
    </section>
  );
};

export default MealsSummary;
