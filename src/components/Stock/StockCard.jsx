import React from 'react'

export const StockCard = ({id, img, title, description}) => {
  return (
   
    <div className="stock-card">
        <img src={img}/>
        <p className='stock-card__title'>{title}</p>
        <p className='stock-card__description'>{description}</p>
        <p className='stock-card__action'>до 31 июля.</p>
    </div>
  )
}

export default StockCard;