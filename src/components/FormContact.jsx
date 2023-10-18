import  { useState } from 'react';
import animacion from '../assets/envioFormulario.gif'

export function FormContact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario al servidor, si es necesario.

    // Una vez que el formulario se ha enviado con éxito, establece isFormSubmitted en true.
    setIsFormSubmitted(true);
  };

  return (
    <div>
      {isFormSubmitted ? (
        <div className="success-message">
           <img src={animacion} alt="formulario enviado"></img>

          <h2 className="formEnviado">Tu formulario fue enviado con éxito.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className='titulo'>
            ¡Contáctanos para un <br />
            <span className="green">Cambio Sostenible!</span>
          </h2>
          <p>
            ¿Conoces un lugar que necesita una mano amiga y un poco de amor ambiental? ¿Tienes en mente una playa,
            río, bosque o cualquier otro rincón de la naturaleza que merece ser limpiado y protegido? ¡Nos encantaría
            escucharte!<br /><br />
            ¡Tu contribución es esencial para un planeta más limpio y sostenible! Contáctanos hoy mismo y juntos
            haremos una diferencia real.
          </p>
          <input type="text" name="nombre" id="nombre" placeholder="Nombre" required />
          <input type="text" name="correo" id="correo" placeholder="Correo" required />
          <input type="text" name="ubicacion" id="ubicacion" placeholder="Ubicación(Opcional)" />
          <textarea name="mensaje" id="mensaje" cols="10" rows="3" placeholder="Mensaje"></textarea>
          <button type="submit" className='btnSubmit'>Enviar</button>
        </form>
      )}
    </div>
  );
}

