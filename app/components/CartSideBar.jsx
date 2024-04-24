'use client';

import CheckoutBtn from "./CheckoutBtn";
import CartItem from "./CartItem";

import { useShoppingCart } from "use-shopping-cart";
import {Sheet, SheetContent, SheetHeader, SheetTitle} from '@/app/components/ui/sheet';
import {ScrollArea} from '@/app/components/ui/scroll-area';
import { Check } from "lucide-react";


const CartSideBar = () => {
    const { cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice } = useShoppingCart();
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent>
            <SheetHeader>
                <SheetTitle className='text-left mb-12'>My Cart ({cartCount})</SheetTitle>
            </SheetHeader>
                <>
                    {cartCount === 0 ? (
                    <div className='flex flex-col items-center justify-center w-full h-[760px]'>
                        <h5 className='text-black/50'>Your cart is empty</h5>
                    </div>
                ) : (
                <ScrollArea  className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
                        {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                                return <CartItem item={item} key={key} />;
                        })}
                </ScrollArea>
                )}
                </>
                {cartCount > 0 && (
                    <div >
                        <div className='flex justify-between items-center'>
                            <h4>Subtotal</h4>
                            <h4>{totalPrice} €</h4>
                        </div>
                        <CheckoutBtn />
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default CartSideBar