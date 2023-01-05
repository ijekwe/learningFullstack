import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import data from './data'
import Card from '../../components/Card'
import './about.css'


const About = () => {
  return (
    <section id ="about" data-aos="fade-in">
        <div className="container about_container">
            <div className="about_left">
                <div className="about_portrait">
                    <img src={AboutImg} alt="About Img"/>
              </div>
          </div>
        <div className="about_right">
                <h2>About Me</h2>
                <div className="about_cards">
                    { 
                      data.map(item => (
                          <Card key ={item.id} className="about_card">
                              <span className='about_card-icon'>{item.icon}</span>
                              <h5>{item.title}</h5>
                              <small>{item.desc}</small>
                          </Card>
                        ))
                    }              
                </div>
        
                <p>
                My professional experience includes product management, product design, and providing data-driven decisions to improve products and processes.
                <br/>
                <br/>
                I have extensive experience working in a collaborative and cross - functional environment and presenting status updates to: developers, quality assurance, and project managers.
                <br/>
                <br/>
                Assisted in the design and development of the Samsung Elite application for Samsung which included implementing a feature that established customer representatives the ability of providing consumers with knowledge of Samsung products.
                <br/>
                <br/>
                Successfully completed the project through a series of sprints. I wrote test cases and performed multiple rounds of testing to ensure quality, efficieny and functionality.
                </p>
                <a href={CV} download className='btn primary'>Download CV <AiOutlineCloudDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About