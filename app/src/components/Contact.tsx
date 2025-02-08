import React from 'react'
import '../styles/services.scss'

const Contact = () => {
  return (
    <main className="max-w-[100dvw] overflow-hidden relative contact">
        <section className="text">
            <div className='tramps'>
                <h6>Contact us</h6>
                <p>in.crement2m limited <br />
                    12A Oduduwa Way, G.R.A., Ikeja, Lagos <br /> <br />
                    Tel: <a href="tel:+2347089931155" type='tel'>+234 708 993 1155</a> <br />
                </p>
            </div>
        </section>

        <section className="map" style={{ margin: 'auto' }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.7612005688375!2d3.356371883804058!3d6.574976154733418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9273331fff09%3A0x570aa62f6d20b3e5!2s12a%20Oduduwa%20Way%2C%20Ikeja%20GRA%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1733755197299!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{border: 0}}
                // allowfullscreen
                loading="lazy" 
                // referrerpolicy="no-referrer-when-downgrade"
                title='Increment Map Location'
                ></iframe>
        </section>
    </main>
  )
}

export default Contact