import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateDispatchContext } from './StateProvider';

export default function Product({id, title, price, rating, imageUrl}) {

  const dispatch = useStateDispatchContext();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: imageUrl,
        price: price,
        rating: rating
      },
    });
  };
  
  return (
    <div className="col-sm gx-5 p-4 __itemBackground" key={id} id={id}>
      <div className="__productImage text-center pb-4">
        <img src={imageUrl} alt="" className="rounded img-thumbnail" />
      </div>
      <p className="__productName">
        {title}
      </p>
      <p className="__productPrice">{price}</p>
      <p className="__productRating">
        {
            Array(rating).fill().map((item, i) => (
                <StarRateIcon key={i} />
            ))
        }
      </p>
      <div className="d-grid gap-2 col-6 mx-auto align-bottom">
        <button onClick={addToCart} className="btn btn-primary" type="button">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
