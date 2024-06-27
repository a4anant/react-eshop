import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal, useStateContext } from '../StateProvider';

function SubTotal() {

  const initialState = useStateContext();

  return (
    <div className="container-fluid">
      <div className="row mb-4 p-3 checkout__subTotal">
        <CurrencyFormat 
          renderText={(value) => (
            <>
              <p>Subtotal ({initialState.basket.length} items) : <strong>${value}</strong></p>
              <small>
                <input type="checkbox" name="gift" value="" /> This order contains a gift!
              </small>
            </>
          )}

          decimalScale={2}
          value={getCartTotal(initialState.basket)}
          displayType={"text"}
          thousandSeparator={true}
        />
        <br />
        <a className="btn btn-primary mt-5" href="/payment" role="button">Proceed to checkout</a>
      </div>
    </div>
  )
}

export default SubTotal