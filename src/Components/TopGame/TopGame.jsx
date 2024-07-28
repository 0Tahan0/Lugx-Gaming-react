/* eslint-disable react/jsx-key */
import TopGameData from '../../Data/TopGameData/TopGameData'
import Primarybtn from '../Buttons/PrimaryButton/Primarybtn'
import CardTopGame from '../Cards/TopGameCards/CardTopGame'
import   './TopGame.css'

const TopGame = () => {
  const cards = TopGameData.map(display =>{
    return <CardTopGame image={display.image} title={display.title} nameGame = {display.nameGame}/>
  })
  return (
    <>
    <div className='section-top-game'>
    <div className='title'>
        <div className='title-left-part'>
            <h3>Top Game</h3>
            <h1>Most Played</h1>
        </div>
        <div className='right-part'>
        <Primarybtn>View all</Primarybtn>
        </div>
    </div>
    <div className='container-cards'>
        <div className='card-top-game'>
        {cards}
        </div>
    </div>
</div>
    </>
  )
}

export default TopGame
