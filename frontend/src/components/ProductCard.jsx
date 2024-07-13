import React from 'react'
import '../scss/components/productcard.scss'

const ProductCard = ({details}) => {
  console.log("details",(details.img))
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={details?.img} alt='shoe' />
      </div>
      <div className="product-card__name">{details?.title}</div>
    </div>
  );
};

export default ProductCard

