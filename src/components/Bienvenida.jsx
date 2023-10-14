import HomeImg from "../assets/homeimg.png";
import "../index.css";
import circle from "../assets/Sin título-45.png";

function Bienvenida() {
  return (
    <div>
      <img src={circle} alt="circleTitle" className="circleTitle"></img>
      <div className="container" id="inicio">
        <section className=" homeText">
          <h1 className="titulo">
            ¡Unidos por un{" "}
            <span className="green">
              <br></br>planeta
            </span>{" "}
            más limpio!
          </h1>
          <p>
            En EcoAmigos, estamos comprometidos con la causa de un mundo más
            limpio y sostenible. Creemos que todos podemos marcar la diferencia
            cuando trabajamos juntos en armonía con la naturaleza. Te invitamos
            a unirte a nuestra comunidad global de amantes de la naturaleza y
            defensores del medio ambiente.<br></br>
            <br></br>
            Aquí en EcoAmigos, cada pequeña acción cuenta. ¿Tienes un lugar
            favorito que necesite una limpieza? ¿Has visto un área que necesita
            atención? Únete a nosotros y comparte tus observaciones con nuestra
            comunidad. Juntos, podemos trabajar para limpiar y restaurar estos
            lugares especiales.
          </p>
          <a href="/#login" className="communityBtn">
            ¡Únete a nuestra comunidad!
          </a>
        </section>
        <img src={HomeImg} alt="HomeImg" className="homeImg imgAside"></img>
      </div>
    </div>
  );
}

export default Bienvenida;
