/* eslint-disable react/prop-types */
import './TrendingCard.css'

const TrendingCard = (props) => {
    return (
        <>
            <div className='card-trending' >
            {}
                <div className='image'>
                    <img src={props.img} alt='' />
                    <span className='price'>{props.price}$</span>
                </div>
                <div className='data-card'>
                    <div className='data'>
                        <span>{props.action}</span>
                        <h3>{props.gameName}</h3>
                    </div>
                    <div className='icon'>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCard
