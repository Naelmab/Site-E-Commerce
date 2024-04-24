'use client';

import Link from "next/link";
import Nav from "@/app/components/Nav.jsx";
import CartSideBar from "@/app/components/CartSideBar.jsx";
import Image from "next/image";

import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick} = useShoppingCart();
  return (
    <header className='bg-white shadow-lg sticky top-0 py-5 z-40'>
      <div className="container mxauto flex justify-between items-center">
        <Link href='/' className="flex items-center">       
          <Image src='/assets/logo-Bik-E.png' width={100} height={100} /> 
          <h1 className='text-2xl font-bold'>
            Bik<span className='text-accent'>-E</span>
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[36px]" />
          <div onClick={()=> handleCartClick()} className="relative cursor-pointer">
            <CgShoppingBag className='text-[26px]' />
            <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full
            text-white flex item-center justify-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  )
}

export default Header;