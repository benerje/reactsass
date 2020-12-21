import React, { useState } from 'react'

const About = () => {
    const[state] = useState({heading:'Who we are?',text:' We’re Not Just Advertisers. We’re Creators. We combine creative ideas with our vast experience in search technologies to deliver measurable results for our clients. We can help you build a sustainable products. “The secret of change is to focus all your energy not on fighting the old but on building the new.”'})

    const [sections] = useState([
        {id:1,icon:<svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
      </svg>, heading:'Digital Marketing',Text:'Digital marketing is the marketing of goods and services using digital technology. The Internet and mobile phones are examples of digital marketing.Search Engine Optimisation (SEO)'},{
          id:2,icon:<svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-gem" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z"/>
        </svg>,heading:'Web & App Development',Text:'Our expertise in e-commerce, adtech/martech, and people-to-people fields as well as other business areas helps us develop web and mobile solutions tailored with care for our clients. '
      },{
          id:3,icon:<svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-shop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
        </svg>,heading:'Graphic Design',Text:'Our team connects conventional essential technologies and architecture with the unique logic of the app. Combined with a polished design and UI/UX an app becomes the one.'
      }
    ])
    return (
       
            <div className="about">
                <div className="container">
                    <div className="row">
                            <div className="col-3">
                            <h4 className="about__h4">{state.heading}</h4>
                            </div>

                            <div className="col-9">
                                <div className="about__text">
                                    <p>
                                {state.text}
                                    </p>
                            </div>
                            </div>
                    </div>

                    <div className="row mt-60">

                        {sections.map(section=>(

                       
                        <div className="col-4 p1-15" key={section.id}>
                            <div className="about__section ">
                                <div className="about__section-icon">
                                {section.icon}
                                </div>
                                
                                <div className="about__section-heading">
                                    <h6>{section.heading}</h6>
                                </div>
                                
                                <div className="about__section-text">
                                    <p>{section.Text}</p>
                                </div>
                            
                            </div>
                    </div>
                        ))}
                 </div>
              </div>

            </div>
      
    )
}

export default About
