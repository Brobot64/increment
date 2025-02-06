import Image from 'next/image'
import React from 'react'
import '../styles/home.scss'

const Homies = () => {
  return (
    <main className=''>
        <section className="main ">
            <div className="texties relative">
                <div className="limage">
                    <Image
                        src="/assets/homeimg.png"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
                <h2 className='bigger'>
                    We are a <br />
                    <span>
                        Commercial <br />
                        Excellence <br />
                    </span>
                    Solutions Provider
                </h2>

                <h2 className="smaller">
                    <span>in.crement2m</span> is a <br />
                    Commercial <br />
                    Excellence <br />
                    Solutions Provider
                </h2>
                
            </div>

            <p>
            Our practice spans Strategic through to Operational Marketing 
            (Commercial) interventions that help our clients unlock business growth
            </p>

            <button>
                contact us today!
            </button>

            <div className="about-us-pre">
                <div className="bios">
                    <h4>WHO WE ARE</h4>
                    <p>
                    We are a team of senior Commercial
                    professionals with extensive practical
                    knowledge and experience working
                    with industry leading global multinationals. We have been there,
                    we have done it, and we bring a
                    practical, hands-on approach to every
                    engagement.
                        <br /><br />
                    We are executives who team with
                    other professionals to provide both design and executional capabilities to
                    a range of businesses, from start ups through to mid-sized and large
                    corporations.
                    We combine deep domain knowledge
                    in commercial operations with on-the ground
                    multi-industry experience from
                    various markets in Africa to help your
                    organisation find pathways to unlock
                    business growth.
                    </p>
                </div>
                <div className="bios">
                    <h4>WHAT WE DO</h4>
                    <p>
                        Our Commercial Excellence solutions practice helps businesses embrace the complexity in the marketplace and unlock profitable growth through the development and execution of an integrated operating model that promotes top-line organic growth. <br /> <br />

                        Our model ensures business strategy is linked with market outcomes by helping to uncover growth inhibitors in your commercial operations and working to craft and deploy proven commercial strategies and tactics to reignite and accelerate growth for your business.

                    </p>
                </div>
                <div className="bios">
                    <h4>HoW WE DO IT</h4>
                    <p>
                        We do this by leveraging technology to upgrade marketing, sales, service, and supply chain capabilities to drive efficiencies and revenue or margin improvements. We make this happen via the deployment of superior
                        commercial growth strategies and tactics, improved analytics and better than market capability development of your commercial function. 
                        <br /><br />
                        Our solutions provide proven and actionable strategies and tactics that
                        help unlock growth in your business.
                        Our customer-centric approach takes a
                        holistic view of the commercial issues and opportunities businesses face and we apply these insights in the design
                        of remedial solutions to unlock
                        growth.
                    </p>
                </div>
            </div>

            <div className="differences mb-[50px]">
                <h3>Our Points of Difference</h3>

                <div className="uniqueness">
                    <div className="indiv">
                        <div>
                            <Image
                                src="/assets/Group.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p>Insights-Led</p>
                    </div>
                    <div className="indiv">
                        <div>
                            <Image
                                src="/assets/customer.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p>Customer 
                        Obsessed</p>
                    </div>
                    <div className="indiv">
                        <div>
                            <Image
                                src="/assets/Vector.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p>Problem Solving/
                        Consultative Mindset</p>
                    </div>
                    <div className="indiv">
                        <div>
                            <Image
                                src="/assets/exec.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p>Execution-biased</p>
                    </div>
                    <div className="indiv">
                        <div>
                            <Image
                                src="/assets/Growth.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p>Growth Driven</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="middies" id='approach'>
            <div className="limage-blur">
                <p>We do this by working with clients to improve and upgrade <br />
                Commercial Excellence capabilities within their organisations <br /> 
                to find and unlock pathways to business growth <br />
                </p>
            </div>


            <div className="bg-white trump">
                <div className="grimes">
                <div  className="wraps">
                        <h2>
                            Our 3 D&#39;s <br />
                            Approach
                        </h2>
                        <div className="little-app">
                           <div className="all-lapp">
                            <Image
                                src="/assets/binoc.svg"
                                alt="binocular"
                                width={180}
                                height={38}
                                priority
                            />
                            <div className="faint">
                                <h5>DISCOVER</h5>
                                <p>Discovering superior insights into customers that unlock growth</p>
                            </div>
                           </div>
                           <div className="all-lapp crave"style={{ flexDirection: 'row-reverse' }}> 
                            <Image
                                src="/assets/board.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                            <div className="faint" style={{ marginLeft: '50px' }}>
                                <h5>DESIGN</h5>
                                <p>Designing the right strategies and processes to execute the growth vision in a multichannel world</p>
                            </div>
                           </div>
                           <div className="all-lapp">
                            <Image
                                src="/assets/parachute.svg"
                                alt="home"
                                width={180}
                                height={38}
                                priority
                            />
                            <div className="faint">
                                <h5>DELIVER</h5>
                                <p>Delivering agreed tactics to the market flawlessly</p>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Homies