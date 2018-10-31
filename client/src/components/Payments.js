import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../actions';

const Payments = ({ handleToken }) => (
  <StripeCheckout
    name="Udemy"
    description="$5 for 5 credits"
    amount={500}
    token={token => handleToken(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    <button className="btn">Add Credits</button>
  </StripeCheckout>
);

export default connect(
  null,
  { handleToken }
)(Payments);
