import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3> Iheanyi Ekweghariri</h3>
        <p>
        Experienced Business Technologist who demonstrates functional expertise and detailed knowledge of the full software development and delivery lifecycle. Bringing forth strong product management skills and impeccable communication skills, leading to ultimate productivity.
        </p>
        <div className="header_cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="portfolio" className='btn light'>My Work</a>
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