'use client'
import React, { useState } from 'react'
import '../styles/services.scss'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'

interface User {
  name: string;
  image: string;
  bio: string;
}

const Services = () => {
  // Dummy data for leadership team
  const leadershipData = [
    {
      name: 'Dapo Dosunmu',
      image: '/assets/dpdosum.png',
      bio: "A seasoned Sales and Distribution expert with over 30 years working experience. He had stints in Marketing, Project Management and Operations Management. The application of his knowledge has core focus in Revenue generation, Demand creation and fulfilment, Distribution effectiveness, Sales & Operations planning process and Operating procedures.  His experience spans FMCG and Telecoms. An MBA Graduate of Business Administration & Marketing from Lagos State University, Ojo. Has attended several Leadership & Management courses in South Africa, Lagos Business School, Harvard Business School amongst others.  Enjoys travelling and appreciates diversity in culture, meeting people, part time reader and enjoys delicious good food. He is a cheerful giver and makes self available to support others to grow.",
    },
    {
      name: 'Oare Ojeikere',
      image: '/assets/oreokj.png',
      bio: "A senior marketing professional with significant Commercial management experience (30+) with industry-leading global organisations and major regional conglomerates, namely Xerox, Accenture, Coca-Cola, Airtel and the Dangote Group. Experience spans both strategic marketing and operational marketing roles at both country and group levels working in seven different countries in Africa, Middle East and Europe. Key positions held include Division Brand Manager Coca-Cola (Morocco/Egypt), Group Brand Director Celtel/Zain (Netherlands/Bahrain/Kenya), Marketing Director Airtel (Ghana), Marketing Director Coca-Cola (Nigeria) and Group Chief Marketing Officer, Dangote Industries (Nigeria)  and Chief Commercial Officer, Dangote Cement.",
    },
    {
      name: 'Paul Udochi',
      image: '/assets/pulodch.png',
      bio: "A Sales & Distribution professional with (30+) years of Commercial management experience working with industry-leading global organisations, namely Coca-Cola, Cadbury, FMN PLC and SC Johnson. Strong Sales operations experience spanning both B2B and B2C with proven track record of successful customer management, Key account development, people development, and achieving market growth in challenging and competitive environments. Key positions held include Market Development Manager, National Key accounts Manager and Franchise Manager, Coca-Cola Nigeria & Equatorial Africa Limited, Sales Director Cadbury West Africa, and Head of B2B Sales, FMN PLC. Paul holds a PHD Degree in Coaching and Leadership.",
    },
    {
      name: 'Femi Kupoluyi',
      image: '/assets/femskul.jpg',
      bio: "A Sales and Distribution professional and consultant with over 30 years of experience, drives trusted revenue growth through transformative strategies in sales, distribution and marketing. As Sales and Distribution Director at Airtel Nigeria, Director of SmartCash PSB, and Director of Sales Operation and General Management at Coca-Cola Nigeria, Femi\'s expertise spans FMCG, telecommunications, digital banking, and payment service banks across Nigeria, South Africa, Egypt, and 24 other African countries. He develops multi-channel strategies that optimize market penetration and profitability. His strong background in IT and software development, including roles as Head of Information Systemsat Coca-Cola, complements his ability to drive digital transformation. A proven leader and project manager, Femi effectively manages diverse teams and projects. With an MBA and B.Sc in Electrical and Electronic Engineering, Femi leverages his extensive experience to navigate complex business challenges and deliver sustainable results for organizations seeking growth in the digital age."
    },
  ];

  const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for selected user
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handlePersonaClick = (user: User) => {
    setSelectedUser(user);
    setPopupVisible(true); // Show popup
  };

  const handleCancelClick = () => {
    setPopupVisible(false); // Hide popup
    setSelectedUser(null); // Clear selected user
  };

  return (
    <main className="max-w-[100dvw] overflow-hidden relative">
        <section className="top ">
            <h2>about</h2>
        </section>

        <section className="mint">
            <div className="top">
                <h4>We are a team of senior Commercial professionals with extensive practical knowledge and experience working with industry leading global multinationals.</h4>
                <p>
                We have been there, we have done it, and we bring a practical, hands-on approach to every engagement. We are executives who team with other professionals to provide both design and executional capabilities to a range of businesses, from start ups through to mid-sized and large corporations. We combine deep domain knowledge in commercial operations with on-the-ground multi-industry experience from various markets in Africa to help your organisation find pathways to unlock business growth.
                </p>
            </div>

            <div className="bottom">
                <div className="item">
                    <h3>Our Purpose</h3>
                    <Image
                        src="/assets/arrows.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <p>
                    At in.crement2m, our purpose is to help facilitate a world where all our customers are thriving commercially – we are in the customer commercial success business.
                    </p>
                </div>
                <div className="item">
                    <h3>Our Mission</h3>
                    <Image
                        src="/assets/arrows.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <p>
                    We are obsessed with helping our customers grow organically and be more successful in the marketplace.
                    </p>
                </div>
                <div className="item">
                    <h3>Our Values</h3>
                    <Image
                        src="/assets/arrows.svg"
                        alt="home"
                        width={180}
                        height={38}
                        priority
                    />
                    <p>
                    Customer obsession Teamwork where individuals are respected Growth bias Creative entrepreneurial spirit
                    </p>
                </div>
            </div>
        </section>

        <section className="leadership" id='leadership'>
            <h3>our leadership team</h3>
            <div className="team-gala">
                {leadershipData.map((user) => (
                    <div className="persona" key={user.name} onClick={() => handlePersonaClick(user)}>
                        <Image
                            src={user.image}
                            alt={user.name}
                            width={180}
                            height={38}
                            priority
                        />
                        <h4>{user.name}</h4>
                    </div>
                ))}
            </div>
        </section>

        {isPopupVisible && ( // Conditional rendering for popup
            <section className="sumPop">
                <div className="cancel">
                    <button onClick={handleCancelClick}><GrClose/></button>
                </div>
                <div className="info">
                    {selectedUser && ( // Check if selectedUser is not null
                        <>
                            <Image
                                src={selectedUser.image}
                                alt={selectedUser.name}
                                width={180}
                                height={38}
                                priority
                            />
                            <p>{selectedUser.bio}</p>
                        </>
                    )}
                </div>
            </section>
        )}
    </main>
  )
}

export default Services