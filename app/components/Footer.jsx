import Link from "next/link"
import { Input } from "./ui/input"
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className='pt-12 xl:pt-24 bg-primary text-white text-center'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className='capitalize leading-tight mb-2'>
              Subcribe to our newsletter
            </h2>
            <p className='text-white/60'>
              Be the first to know about new products, promotions, and more !
            </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto
          gap-5 items-center">
            <Input placeholder="Enter your email adress"/>
            <button className='btn w-full xl:max-w-[150px] h-[40px] btn-accent rounded-full'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 AhliaBike. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer