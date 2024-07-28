/* eslint-disable react/prop-types */
import Primarybtn from '../../Buttons/PrimaryButton/Primarybtn'
import './CardTopGame.css'

const CardTopGame = (props) => {
    return (
        <>
            <div className='card-top-game1'>
                <div className='image-top-game'>
                    <img src={props.image} alt='' />
                </div>
                <div className='data-card'>
                    <span>{props.title}</span>
                    <h3>{props.nameGame}</h3>
                    <div className='btn1'><Primarybtn>Explore</Primarybtn></div>
                </div>
            </div>
        </>
    )
}

export default CardTopGame
