import './LandPage.css'
import banner from '../../assets/images/banner-image.jpg'
function LandPage() {
    return (
        <>
            <div className='land-page'>
                <div className='cot-1'>
                <div className='left-part p-4'>
                    <h4>Welcome To LUGX</h4>
                    <h1>Best Gaming Site Ever!</h1>
                    <p>
                    LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. 
                    You can download and use this layout for commercial purposes. 
                    Please tell your friends about TemplateMo.
                    </p>
                    <div className='input-search'>
                        <input type='search' placeholder='type somthing'/>
                        <button>Search now</button>
                    </div>
                </div>
                <div className='right-part p-4'>
                    <h4>$22</h4>
                    <div className='image'>
                    <img src={banner} alt='banner' />
                    </div>
                    <span>-40%</span>
                </div>
                </div>
            </div>
        </>
    )
}

export default LandPage