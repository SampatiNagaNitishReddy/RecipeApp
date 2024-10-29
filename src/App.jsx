import { useState } from "react";
import Search from "./components/search.jsx";
import Foodlist from "./components/foodlist.jsx";
import Nav from "./components/nav.jsx";
import Container from "./components/container.jsx"
import "./app.css"
import InnerContainer from "./components/innerContainer.jsx";
import FoodDetails from "./components/foodDetails.jsx";
export default function App() {
  const [foodData, setFoodData] = useState([]);
  const[Foodid,setFoodId]=useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails Foodid={Foodid}/>
        </InnerContainer>
      </Container>
    </div>
  )
}


