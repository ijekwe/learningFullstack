import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])  

    return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile" data-aos='fade-in'>
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up"> Iheanyi Ekweghariri</h3>
        <p data-aos="fade-up">
        Experienced <b>Business Technologist</b> and <b>Front End Web Developer </b> who demonstrates functional expertise and detailed knowledge of the full software development and delivery lifecycle. Bringing forth strong product management skills and impeccable communication skills, leading to ultimate productivity.
        </p>
        <div className="header_cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="Experiences" className='btn light'>My Experience</a>
        </div>
        <div className="header_socials">
        {
          data.map(item => <a key={item.id} href={item.link} target={"_blank"}
          rel="noopener noreferrer">{item.icon}</a>)
        }
        </div>
      </div>
    
    </header>
  )
}

export default Header