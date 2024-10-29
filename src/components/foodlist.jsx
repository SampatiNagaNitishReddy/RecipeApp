import Fooditem from "./foodItem";
export default function Foodlist({foodData,setFoodId})
{
    return(
        <div>
             {foodData.map((food)=>(
                <Fooditem key={food.id} food={food} setFoodId={setFoodId}/>
                ))}
        </div>
    );
}