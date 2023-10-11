import '../index.css';
import ContactImg from '../assets/contactImg.png';
import { FormContact } from './FormContact';

export default function Contacto() {
  return (
    <div>
      <section className="contact">
        <div className="container contactContainer">
          <section className="contactImg">
            <img src={ContactImg} alt="contactImg" className="imgAside" />
          </section>
          <section className="contactForm" id="contacto">
            <FormContact />
          </section>
        </div>
      </section>
    </div>
  );
}
