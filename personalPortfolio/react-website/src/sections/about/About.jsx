import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import data from './data'
import Card from '../../components/Card'
import './about.css'


const About = () => {
  return (
    <section id ="about">
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
        
                <p>My professional experience includes product management, designing, and crafting code for mobile applications as well as e-commerce web development, and then testing the resulting code to meet client needs. I have extensive experience working in a collaborative and cross - functional environment and presenting status updates to whomever may be involved in the project: developers, quality assurance, project managers, etc…</p> 
                
                <p>I took part in the design and development of the Samsung Elite application for Samsung which connected with customer representatives to assist in knowledge of the Samsung products. Throughout the process, I conducted a number of sprints for the completion of the project and for a successful launch. I wrote test cases for features and performed multiple rounds of testing with quality assurance.</p> 
                <a href={CV} download className='btn primary'>Download CV <AiOutlineCloudDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About