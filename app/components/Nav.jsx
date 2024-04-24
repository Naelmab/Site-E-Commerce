'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {name: 'Home', path: '/'},
  {name: 'Our Bikes', path: '/our-bikes'},
  {name: 'About Us', path: '/about-us'},
  {name: 'Contact', path: '/contact'},
  {name: 'Testimonials', path: '/testimonial'},
]

const Nav = ( {containerStyles} ) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname ? 'text-accent' : 'text-black'}`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav