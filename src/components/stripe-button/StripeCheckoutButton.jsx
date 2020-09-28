import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //convert dollars to cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HWRYjDCEGXBTjVNdoyOH3PAmHW5a2yR3AQcBIvrVQU2kFbS4pnBHpzROTqjcMK5XrFhKCIMNysfQd3JNRrrfxpu00niYdEkfI';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="RYL Clothing Co."
      billingAddress=""
      shippingAddress=""
      image="https://sendeyo.com/up/d/f3eb2117da" //replace with your svg converted image if you want
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
