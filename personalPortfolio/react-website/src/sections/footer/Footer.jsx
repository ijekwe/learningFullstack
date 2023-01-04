import {links} from './data'
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
      </div>
      <div className="footer_copyright">
        <small>Iheanyi Ekweghariri &copy; All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer