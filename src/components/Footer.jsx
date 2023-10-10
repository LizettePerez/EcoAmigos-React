import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export function Footer() {


  return (
    <div>
      <footer>
        <div className="socialMedia">
          <h4>Síguenos en Redes Sociales</h4>
          <ul className="socialLinks">
            <li><a className="custom-a" href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon />Facebook</a></li>
            <li><a className="custom-a" href="#" target="_blank" rel="noopener noreferrer"><TwitterIcon /> Twitter</a></li>
            <li><a className="custom-a" href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon /> Instagram</a></li>

          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2023 EcoAmigos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
