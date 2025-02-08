import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footties flex gap-7'>
            <div className='trip flex justify-between'>
                <Image
                    src="/assets/logo.svg"
                    alt="binocular"
                    width={180}
                    height={38}
                    priority
                />
                <div className="flex">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Our Capabilities</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link href="/#approach">3D&#39;s Approach</Link></li>
                        <li><Link href="/services/#outreach">Our Solution</Link></li>
                        <li><Link href="/services/#capabilities">Commercial 
                        Capability Practice</Link></li>
                        <li><Link href="/about-us/#leadership">Our Leadership
                        Team</Link></li>
                    </ul>
                </div>
            </div>

            <div className="subscribetypes">
                <h3>
                Get our newsletter
                </h3>
                <div className="input-tram">
                    <input type="text" name="" id="" placeholder='email address' />
                    <button>subscribe now!</button>
                </div>
                <div className='tramps'>
                    <h6>Contact us</h6>
                    <p>in.crement2m limited <br />
                        12A Oduduwa Way, G.R.A., Ikeja, Lagos <br />
                        +234 708 993 1155 <br />
                    </p>
                </div>
            </div>
        </div>
        <p className='text-center w-full amk' style={{ textAlign: 'center' }}>Copyright © 2024 All rights reserved. in.crement2m</p>
    </footer>
  )
}

export default Footer