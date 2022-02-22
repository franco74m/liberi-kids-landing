import styles from "./Footer.module.css";
import "bulma/css/bulma.min.css";
import { FaWhatsapp,FaInstagram } from 'react-icons/fa';


function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className='pupi'>
        <div className="column">
          <div className="content has-text-LEFT">
          <div className="col">
            <h4 className={styles.categoria}>Categorías</h4>
              <ul className={styles.list}>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="https://liberi.mitiendanube.com" >Inicio</a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="https://liberi.mitiendanube.com/productos/" >Productos</a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="https://liberi.mitiendanube.com/contacto/" >Contacto</a>
                </li>
              </ul>			
          </div>
            <p className={styles.elMaster}>
              <strong>LANDING PAGE</strong> by{" "}
              <a href="https://github.com/GaspiCastello">Gaspar Castello</a>.
            </p>
          </div>
        </div>								
        <div className={styles.column}>
          <div class="content has-text-right">
            <a
              className={`${styles.buttonIg} button is-link is-rounded is-medium`}
              target="_blank"
              href="https://www.instagram.com/liberikids_/" rel="noreferrer"
            >
            <FaInstagram />
            </a>
            <a
              className={`${styles.buttonWa} button is-primary is-rounded is-medium`}
              target="_blank"
              href="https://web.whatsapp.com/send?phone=+543426156014" rel="noreferrer"
            >
              <FaWhatsapp />
            </a>  
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
