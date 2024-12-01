
'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const handleMenuToggle = () => {
        setOpenMenu((prev) => !prev); // Properly toggle the menu state
    };

    const pathname = usePathname(); // Get the current path

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/capabilities', label: 'our capabilities' },
    { href: '/about-us', label: 'about us' },
    { href: '/contact', label: 'contact us' },
  ];

  return (
    <header>
        <div className='mainheader'>
            <a href="#">
                <Image
                    src="/assets/logo.svg"
                    alt="Increment Logo"
                    width={180}
                    height={38}
                    priority
                />
            </a>
            <nav className="bigger">
                <ul className="bigscreen">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                        href={link.href}
                        className={pathname === link.href ? 'active' : ''}
                        >
                        {link.label}
                        </Link>
                    </li>
                ))}
                    {/* <li><a href="">home</a></li>
                    <li><a href="">our capabilities</a></li>
                    <li><a href="">about us</a></li>
                    <li><a href="">contact us</a></li> */}
                </ul>
                <button
                    onClick={handleMenuToggle}
                    className={`transform transition-transform duration-300 ${
                    openMenu ? 'rotate-90' : '-rotate-90'
                    }`}
                >
                    {openMenu ? (
                    <FiX size={30} className="text-primary" />
                    ) : (
                    <FiMenu size={30} className="text-primary" />
                    )}
            </button>
            </nav>
        </div>


        {openMenu &&
         <nav className="smaller">
                <ul className="train">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                        href={link.href}
                        className={pathname === link.href ? 'active' : ''}
                        >
                        {link.label}
                        </Link>
                    </li>
                ))}
                    {/* <li><a href="">home</a></li>
                    <li><a href="">our capabilities</a></li>
                    <li><a href="">about us</a></li>
                    <li><a href="">contact us</a></li> */}
                </ul>
            </nav>
        }
    </header>
  )
}

export default Header