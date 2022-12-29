import {links, socials} from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <ul className='nav_menu'>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
        <div className="footer_socials">
        {
          socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
        }
        </div>
      </div>
      <div className="footer_copyright">
        <small>Iheanyi Ekweghariri &copy; All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer