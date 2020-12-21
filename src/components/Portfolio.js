import React from 'react'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jfif'
import b4 from '../assets/b4.jfif'


const Portfolio = () => {
    const [state] = React.useState([
        {id:1,image:b1,name:'Shakil Khan',expert:"Flutter"},
        {id:1,image:b2,name:'Sundhar',expert:"ReactJs"},
        {id:1,image:b4,name:'Bunny',expert:"Django"},
    ])
    return (
        <div className="portfolio">
                <div className="container">
                        
                        <div className="portfolio__section">
                            <div className="row">
                                <div className="col-4">
                                        <div className="portfolio__content">
                                            <h6 className="portfolio__content-h6">
                                            EMPLOYEES
                                            </h6>
                                            <h3 className="portfolio__content-h3">
                                            OUR TEAM..
                                            </h3>
                                        </div>
                                </div>

                                <div className="col-8">
                                    <div className="row">
                                    {state.map(img=>(
                                                    <div className="col-4 p1-15">
                                    
                                                    <div className="portfolio__card" id={img.id}>
                                                        <div className="portfolio__card-img">
                                                        <img src={img.image} alt="pic"/>
                                                        </div>
                                                         <h5 className="portfolio__card-name">{img.name}</h5>
                                                            <p className="portfolio__card-expert">
                                                            {img.expert}
                                                            </p>
                                                        
                                                    </div>
        
                                                </div>
                                           ))}
                                    </div>
                                </div>
                            </div>
                       </div>
               </div>
        </div>
    )
}

export default Portfolio
