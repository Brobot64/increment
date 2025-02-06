import Image from 'next/image'
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Our Capabilities</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <ul>
                        <li><a href="/#approach">3D&#39;s Approach</a></li>
                        <li><a href="/services/#outreach">Our Solution</a></li>
                        <li><a href="/services/#capabilities">Commercial 
                        Capability Practice</a></li>
                        <li><a href="/about-us/#leadership">Our Leadership
                        Team</a></li>
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
                        +234 907 000 4141 <br />
                    </p>
                </div>
            </div>
        </div>
        <p className='text-center w-full amk' style={{ textAlign: 'center' }}>Copyright © 2024 All rights reserved. in.crement2m</p>
    </footer>
  )
}

export default Footer