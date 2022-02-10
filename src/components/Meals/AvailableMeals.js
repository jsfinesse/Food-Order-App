import React from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "New York Special Pizza",
        description: "New York Style Pizza as you know and love",
        price: 9.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 7.99,
    },
    {
        id: "m4",
        name: "Mojito",
        description: "Tangy, sweet, refreshing",
        price: 4.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
