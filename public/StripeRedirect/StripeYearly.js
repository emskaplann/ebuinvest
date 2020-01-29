var stripe = Stripe('pk_live_Y4ZpMfxp2w8fDkilkdQJsJvT00s1VJ4euh');

stripe.redirectToCheckout({
  items: [{
    // Replace with the ID of your plan
    plan: 'plan_GdMG6ON3woJjPm',
    quantity: 1,
  }],
  successUrl: 'https://ebuinvest.com/',
  cancelUrl: 'https://ebuinvest.com/',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});
