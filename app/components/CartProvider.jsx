'use client';

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({children}) => {
  return (
    <CProvider 
    mode="payment"
    cartMode="client-only"
    stipe=''
    successUrl="succes"
    cancelUrl="error"
    language="en-US"
    currency="EUR"
    billingAddressCollection={true}
    shouldPersist={true}>
        {children}
    </CProvider>
  )
}

export default CartProvider