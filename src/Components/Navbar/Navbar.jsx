/* eslint-disable no-constant-condition */
import './Navbar.css'
import logo from '../../assets/images/logo.png'
function Navbar() {
    return (
        <>
        {/*style={{backgroundColor:'Navbar' ? '#1f81f8' : 'black',}} */}
            <div className='Navbar'>
                <div className='logo'> <img src={logo} alt='logo' /></div>
                <div className='list'>
                    <ul>
                        <li><a href='#' className='primary'>Home</a></li>
                        <li><a href='#'>Our Shop</a></li>
                        <li><a href='#'>Proudct Details</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#' className='sign-in'>SIGN IN</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar

