'use client'
import React from 'react'
import '../styles/about.scss'
import Image from 'next/image'

const Abouts = () => {
  return (
    <main className="max-w-[100dvw] overflow-hidden">
        <section className="top-main">
            <div className="texts">
                <div className="dips">
                    <h1>
                        Commercial <br />
                        Excellence <br />
                        Practice <br />
                    </h1>
                    <p>
                    Our Commercial Excellence Practice helps clients 
                    design and deliver commercial best practices that 
                    grow the business and maximize profitable revenue. 
                    We see Commercial Excellence as the foundation 
                    upon which companies should build and optimise 
                    their Commercial (Sales, Marketing and Customer 
                    Experience) operations. 
                    </p>
                </div>
            </div>

            <div className="image"/>
        </section>

        <section className="actionables">
            <div className="ching">
                <div className="items">
                    <Image
                        src="/assets/Vecttor.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>
                    Market Intelligence
                    </h5>
                    <p>
                    Providing real time understanding of consumers, trade partners to help businesses stay competitive and meet market demands
                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/Vecptor.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>
                    Value Proposition Optimisation
                    </h5>
                    <p>
                    Revalidation of target segmentation, 
                    developing buyer personas, identifying 
                    customer pain points and ensuring resulting proposition fit the market, model and channels
                    </p>
                </div>
                <div className="items">
                <Image
                        src="/assets/planning.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>
                    Market Planning
                    </h5>
                    <p>
                    Development of marketing strategies 
                    that define key activities and actions to 
                    support business&#39; goals and establish 
                    timeline to guide the work to be done

                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/strategy.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>Market Strategy Development</h5>
                    <p>Designing and implementing GTM strategy and tactics to drive profitable business growth
                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/customer-experience.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5 style={{ fontSize: '17.2px' }}>Customer Experience Optimisation
                    </h5>
                    <p>Streamlining sales and service processes in your business to improve customers&#39; interactions with your brand and deliver delight at all touchpoints
                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/thumb-print.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>Brand Identity Management</h5>
                    <p>Development of a united, consistent and flexible brand assets that effectively communicate brand value to the target audiences
                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/product-certificate.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>Product Management</h5>
                    <p>Providing support for new product  introduction biased to creating early trial and recurring purchase
                    </p>
                </div>
                <div className="items">
                    <Image
                        src="/assets/price-tag.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <h5>Sales Promotion Support</h5>
                    <p>Designing and executing consumer 
                    and trade promotional campaigns
                    </p>
                </div>
            </div>

            <div className="our-clients">
                <h3>How We Help Our Clients</h3>
                <div className="clients-points">
                    <div>
                        <h4>Commercial Excellence Practice</h4>
                        <p>
                        We offer bespoke, customer-centric growth driving interventions that help improve the productivity of your commercial functions – marketing, sales and service. Our execution-biased approach helps clients find pathways to unlock business growth by enhancing customer experience, optimising marketing ROI and improving sales productivity and effectiveness.

                        </p>
                    </div>

                    <div className='darck'>
                        <h4>
                        Market Execution/Sales Catalyst
                        </h4>
                        <p>
                        This service brings to our clients&#39; operations, hands-on, in-field intel and compliance audits, perfect store execution support and trade engagement capabilities aimed at closing implementation gaps that prevent businesses from winning at the last mile.
                        This service also covers experiential marketing activations biased toward catalysing sales.
                        </p>
                    </div>

                    <div className="darck">
                        <h4>Sales & Marketing Outsourcing</h4>
                        <p>
                        This flexible people outsourcing service embeds senior-level through to field sales team capabilities in client&#39;s organisation to perform oversight, develop and implement strategy, as well as execute tactical initiatives for our clients.

                        </p>
                    </div>
                </div>
            </div>

            <div className="our-clients twomap" id='capabilities'>
                <h3>Commercial Capabilities Practice</h3>
                <div className="clients-points">
                    <div className='darck'>
                        <h4>SALES FORCE OUTSOURCING</h4>
                        <p>
                        Our Sales Force Outsourcing service allows companies to outsource a portion or the entire sales activities to a trusted partner&#39;s sales team. Using a sales outsourcing partner allows companies to attract and maintain a sales force without having to make them full or part-time employees, while enjoying the benefit of the services of a well-trained and managed sales team.


                        </p>
                    </div>

                    <div className=''>
                        <h4>
                        FRACTIONAL CMO
                        {/* &#34; */}
                        </h4>
                        <p>
                        Our Growth-biased “Executive-as-a-Service” offering gives customers who are not quite ready to hire a full time CMO or CSO, experienced marketing leadership to drive and fuel growth and profitability of their businesses.  With this service, your company gets senior-level Sales & Marketing executive experience and expertise at a fraction of the full-time cost.

                        </p>
                    </div>

                    <div className="col-start-1 col-end-3">
                        <h4>COMMERCIAL STAFF OUTSOURCING</h4>
                        <p>
                        Our Marketing Staff Outsourcing service mirrors what we do with the sales team, only this time applying the same principle for key Marketing staff.

                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="outreach" id='outreach'>
            <div className="closure">
                <div>
                    <h5>Trade Audits/Trade Intelligence</h5>
                    <p>
                    Providing real time understanding of 
                    trends in trade. trade partners and 
                    competition&#39;s behaviours to help 
                    businesses stay competitive and 
                    meet market demands
                    </p>
                </div>
                <div>
                    <h5>Field Sales Outreach</h5>
                    <p>
                    Supporting in-field brand activations through sales and retail activities
                    </p>
                </div>
                <div>
                    <h5>Sales Support/Enablement</h5>
                    <p>
                        Sourcing, training, and empowering field sales teams with skills, information and tools required to improve productivity and boost buyer engagement
                    </p>
                </div>
                <div>
                    <h5>Trade Merchandising</h5>
                    <p>
                    Enhancing the provision of goods to end-user consumers and enticing them to spend
                    </p>
                </div>
                <div>
                    <h5>Route to Market Design/Optimisation</h5>
                    <p>
                    Designing and optimising best fit 
                    distribution channels to get your 
                    products to the right target customers 
                    and at the right time
                    </p>
                </div>
                <div>
                    <h5>Retail Execution</h5>
                    <p>
                    Design and deploy Look of Success POSM for Traditional Trade and building in-store POP displays that attract attention and create unique brand experiences
                    </p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Abouts