import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Product({id, title, price, rating, imageUrl}) {
  return (
    <div className="col-sm gx-5 p-4 __itemBackground" id={id}>
      <div className="__productImage text-center pb-4">
        <img src={imageUrl} alt="" className="rounded img-thumbnail" />
      </div>
      <p className="__productName">
        {title}
      </p>
      <p className="__productPrice">{price}</p>
      <p className="__productRating">
        {
            Array(rating).fill().map((itme, i) => (
                <StarRateIcon />
            ))
        }
      </p>
      <div className="d-grid gap-2 col-6 mx-auto align-bottom">
        <button className="btn btn-primary" type="button">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
