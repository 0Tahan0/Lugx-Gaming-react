import CardBig from '../Cards/CardBig/CardBig'
import CardBig2 from '../Cards/CardBig/CardBig2'
import CardWithBg from '../Cards/CardBig/CardWithBg'
import   './PosterCard.css'

const PosterCard = () => {
  return (
    <>
      <div className='poster-card'>
      <CardBig/>
      <CardWithBg/>
      <CardBig2/>
      </div>
    </>
  )
}

export default PosterCard
