import '../index.css';
import EventImg from '../assets/event.png';


function Eventos() {
  return (
    <div>
      <section className="event">
        <div className="eventContainer">
          <section className="eventBody" id="eventos">
            <h2 className='titulo titleCenter'>Evento de Limpieza <br /><span className="green">&quot;Playa Limpia en Valparaíso&quot;</span></h2>
            <p>¡Únete a la comunidad EcoAmigos y sé parte del cambio!<br /> Te invitamos a participar en nuestro emocionante
              evento de limpieza de playa en Valparaíso, Chile.</p>
            <div className="eventDate">
              <p><span className="green">Fecha:</span> Sábado, 15 de Abril de 2023<br />
                <span className="green">Hora:</span> 9:00 AM - 12:00 PM<br />
                <span className="green">Lugar:</span> Playa de Valparaíso (Punto de encuentro: [Ubicación exacta])
              </p>
            </div>
          </section>
          <section className="eventImg">
            <img src={EventImg} alt="eventImg" className="eventImg" />
          </section>
        </div>
      </section>
    </div>
  )
}

export default Eventos;