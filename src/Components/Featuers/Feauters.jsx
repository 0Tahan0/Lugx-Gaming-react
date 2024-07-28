/* eslint-disable react/jsx-key */
import './Feauters.css'
import DataFeauters from '../../Data/DataFeauters/DataFeauters'
import CardFeauters from '../Cards/CardsFeauters/CardFeauters'

const Feauters = () => {
    const cards = DataFeauters.map(browse => {
        return <CardFeauters image={browse.image} title={browse.title} />
    })
    return (
        <>
            <div className='feauters'>
                <div className='cards'>
                    {cards}
                </div>
            </div>
        </>
    )
}

export default Feauters
