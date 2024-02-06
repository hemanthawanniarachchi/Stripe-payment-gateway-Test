import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { paymentId } from '../context/payment';
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [ id, setId] = useState()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:8000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
            setId(data.id);
        })
          .catch((err)=>console.log(err));
      }, []);

      const appearance = {
        theme: 'nigt',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div>
      <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />

          {paymentId.map((item, i)=>{
            return (
                <div>{item}</div>
            )
          })}
        </Elements>
      )}
    </div>
    </div>
  )
}

export default Payment
