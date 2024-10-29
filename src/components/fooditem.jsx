import styles from "./fooditem.module.css"
export default function Fooditem({ food,setFoodId }) {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemimage}src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
            <button onClick={()=>{
                setFoodId(food.id)
            }}>View Recipe</button>
            </div>
        </div>

    )
}