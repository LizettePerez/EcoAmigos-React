export function FormContact() {


  return (
    <div>
      <form>
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
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
        <input type="text" name="correo" id="correo" placeholder="Correo" />
        <input type="text" name="ubicacion" id="ubicacion" placeholder="Ubicación" />
        <textarea name="mensaje" id="mensaje" cols="10" rows="3" placeholder="Mensaje"></textarea>
        <button type="submit" className='btnSubmit'>Enviar</button>
      </form>
    </div>
  )
}
