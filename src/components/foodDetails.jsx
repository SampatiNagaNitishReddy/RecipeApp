import { useState, useEffect } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./itemList.jsx";
export default function FoodDetails({ Foodid }) {
    const URL = `https://api.spoonacular.com/recipes/${Foodid}/information`;
    const api_key = "682da09629b848f2a426b0f90627eba9";
    const [food, setFood] = useState({})
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${api_key}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsloading(false)
        }
        fetchFood();
    }, [Foodid])
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>🕐{food.readyInMinutes}Minutes</strong>
                    </span>
                    <span>
                        👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian ? "🥕vegetarian" : " 🍗Non-vegetarian"}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegan ? "🐄Vegan" : ""}
                        </strong>
                    </span>
                </div>
                <div>
                💲<span><strong>{food.pricePerServing / 100} Per serving</strong></span>
                </div>
                <h2>Ingredients</h2>
               <ItemList food={food} isLoading={isLoading}/>
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step) => (<li>{step.step}</li>))}
                    </ol>
                </div>
            </div>

        </div>

    )
}