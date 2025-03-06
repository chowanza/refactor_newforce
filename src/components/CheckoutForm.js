import { useEffect, useState, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51QU9HbHkO1vJ9Rq76q2aXUrtxGf4fXO7j2wtI1mgpogCMeInF4uv6eRPrzELhNmx826dOrA7FZGAFkIFNaYtnmAV00Gh3SAqBc");

const CheckoutForm = ({ line_items }) => {
  const [clientSecret, setClientSecret] = useState(null);

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("https://newforce-backend.onrender.com/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ line_items })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [line_items]);

  useEffect(() => {
    if (line_items.length > 0) {
      fetchClientSecret();
    }
  }, [line_items, fetchClientSecret]);

  const options = { clientSecret };

  return (
    <div id="checkout">
      
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      
    </div>
  );
};

export default CheckoutForm;