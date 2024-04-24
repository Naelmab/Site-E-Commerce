'use client'; 

import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";


const AddToCartBtn = ({btnStyles, text, icon, id, currency, name, description, images, price }) => {
  
  const{ addItem } = useShoppingCart();
  const { toast } = useToast();
  const bike = {
      id: id,
      currency: currency,
      name: name,
      description: description,
      image: images,
      price: price 
  }

  return (
    <button className={`${btnStyles}`} 
    onClick={()=> {
      addItem(bike); 
      toast({
        title: `${name} added to cart`,
        message: 'Item added to cart',
        type: 'success'
      
      })
    }}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  )
}

export default AddToCartBtn