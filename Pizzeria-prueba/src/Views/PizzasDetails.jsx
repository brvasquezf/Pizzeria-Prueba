import React, { useEffect, useState } from 'react'
import Cards from '../Components/Card';

export default function PizzasDetails() {

    const PizzasDetails = () => {

        const [pizzaData, setPizzaData] = useState([]);

        useEffect(() => {
            const getPizzaDetails = async () => {
                try{
                    const results = await fetch(`/pizza.json`);
                    const data = await results.json();
                    setPizzaData(data);
                }catch (error){
                    console.error("Error Fetching Pizza Data:", error)

                }
            }
            getPizzaDetails();

        }, []);

        return (
            <div>
                <Cards pizzaData={pizzaData} />
            </div>
        )
    }
}



