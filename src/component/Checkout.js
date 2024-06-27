import React from 'react';
import '../assets/css/Checkout.css';
import checkoutPromotionBanner from '../assets/image/e-commerce-promotion-web-banner.jpg';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import { useStateContext } from '../StateProvider';

function Checkout() {
  
  const initialState = useStateContext();
  let basketContent = '';
  if (initialState.basket.length > 0) {
    basketContent = (
      <>
        {initialState.basket.map((item, i) => (
          <CheckoutProduct 
            id = {item.id}
            price = {item.price}
            image = {item.image}
            title = {item.title}
            rating = {item.rating}
            key = {i}
          />
        ))
        }
      </>
    );
  } else {
    basketContent = (
      <>
      <h4>Your cart is empty!</h4>
      </>
    );
  }
  
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-9">
                <img src={checkoutPromotionBanner} className="img-fluid clearfix" alt="" />
                <h2 className="pt-3 mb-3 border-bottom clearfix">Your shopping basket</h2>
                {basketContent}
            </div>
            <div className="col-3">
                <SubTotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout