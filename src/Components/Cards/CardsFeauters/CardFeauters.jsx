/* eslint-disable react/prop-types */
import "./CardFeauter.css";
const CardFeauters = (props) => {
    return (
        <>
            <a href="#" className="cardLink">
                <div className="card">
                    <img src = {props.image} alt="" className="imageCard1" />
                </div>
                <h3>{props.title}</h3>
            </a>
        </>
    );
};

export default CardFeauters;
