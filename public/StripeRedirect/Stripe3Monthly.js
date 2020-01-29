var stripe = Stripe('pk_test_YJZiIQadCitjxkefrqHysj0g00BNRtnusD');

stripe.redirectToCheckout({
  items: [{
    // Replace with the ID of your plan
    plan: 'plan_GdL9mX1ZYK1j0r',
    quantity: 1,
  }],
  successUrl: 'https://ebuinvest.com/',
  cancelUrl: 'https://ebuinvest.com/',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});
