import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateDispatchContext } from '../StateProvider';

function CheckoutProduct({ id, price, image, title, rating}) {
  
  const dispatch = useStateDispatchContext();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        id: id
      },
    });

  };

  return (
    <>
    <div className="row mb-4 py-3 pt-0" id={id}>
        <div className="col-3">
            <img src={image} alt="" className="rounded img-thumbnail" />
        </div>
        <div className="col-9">
            <p>
            {title}
            </p>
            <p>{price}</p>
            <p>
                {
                    Array(rating).fill().map((item, i) => (
                        <StarRateIcon key={i} />
                    ))
                }
            </p>
            <button onClick={removeFromCart} className="btn btn-primary" type="button">
                Remove from basket
            </button>
        </div>
    </div>
    </>
  )
}

export default CheckoutProduct