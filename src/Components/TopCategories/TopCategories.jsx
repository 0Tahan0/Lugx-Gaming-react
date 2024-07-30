/* eslint-disable react/jsx-key */
import './TopCategories.css'
import DataCardTopCategories from '../../Data/DataCardTopCategories/CardTopCategories'
import CardTopCategories from '../Cards/CardTop Categories/CardTopCategories'
const TopCategories = () => {
    const cards = DataCardTopCategories.map(display => {
        return <CardTopCategories image={display.image} title={display.title} />
    })
    return (
        <>
            <div className='section-TopCategories'>
                <div className='title-TopCategories'>
                    <span>CATEGORIES</span>
                    <h1>Top Categories</h1>
                </div>
                <div className='container-TopCategories'>
                    {cards}
                </div>
            </div>
        </>
    )
}

export default TopCategories
