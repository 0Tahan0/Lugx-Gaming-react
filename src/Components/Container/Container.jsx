import Feauters from '../Featuers/Feauters'
import Footer from '../Footer/Footer'
import LandPage from '../Landpage/LandPage'
import Navbar from '../Navbar/Navbar'
import PosterCard from '../PosterCards/PosterCard'
import TopCategories from '../TopCategories/TopCategories'
import TopGame from '../TopGame/TopGame'
import TrendingGame from '../TrendingGame/TrendingGame'
import './Container.css'
function Container() {
  return (
    <div className="cot">
        <Navbar/>
        <LandPage/>
        <Feauters/>
        <TrendingGame/>
        <TopGame/>
        <TopCategories/>
        <PosterCard/>
        <Footer/>
    </div>
  )
}

export default Container