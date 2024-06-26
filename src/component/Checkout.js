import React from 'react';
import '../assets/css/Checkout.css';
import checkoutPromotionBanner from '../assets/image/e-commerce-promotion-web-banner.jpg';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-9">
                <img src={checkoutPromotionBanner} className="img-fluid clearfix" alt="" />
                <h2 className="py-3 clearfix">Your shopping basket</h2>
                
                <CheckoutProduct />
                
            </div>
            <div className="col-3">
                <SubTotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout