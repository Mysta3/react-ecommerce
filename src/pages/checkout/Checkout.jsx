import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';
import {
  CheckoutHeaderDiv,
  CheckoutPageContainer,
  HeaderBlockDiv,
} from './Checkout.styles';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout-styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderDiv>
      <HeaderBlockDiv>
        <span>Product</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Description</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Quantity</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Price</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Remove</span>
      </HeaderBlockDiv>
    </CheckoutHeaderDiv>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
