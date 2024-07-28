/* eslint-disable react/prop-types */
import './Primarybtn.css'

const Primarybtn = (props) => {
  return (
    <div>
    <a href='#' className='a-btn'>{props.children}</a>
    </div>
  )
}

export default Primarybtn
