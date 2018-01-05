import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="USD"
      >
        <button
          style={{ marginRight: 15 }}
          className="btn btn-floating pulse waves-light green lighten-3"
        >
          Add credits
        </button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);
