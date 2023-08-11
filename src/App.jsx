import { FaOctopusDeploy } from "react-icons/fa"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Food from "./components/Food"
import Category from "./components/Category"


function App() {

  return (
    <div>
      <Navbar/>
      <Hero />
      <HeadlineCards />
      <Food/>
      <Category />

    </div>
  )
}

export default App
