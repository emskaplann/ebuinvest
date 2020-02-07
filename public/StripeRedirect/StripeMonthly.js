var stripe = Stripe('pk_live_Y4ZpMfxp2w8fDkilkdQJsJvT00s1VJ4euh');

stripe.redirectToCheckout({
  items: [{
    // Replace with the ID of your plan
    plan: 'plan_Ggi3i0dL2B3NlT',
    quantity: 1,
  }],
  successUrl: 'https://ebuinvest.com/#/subscription-successful',
  cancelUrl: 'https://ebuinvest.com/',
}).then(function (result) {
  alert(`Ooops! Something went wrong. ${result.error.message}`)
});
