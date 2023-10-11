
function Registro() {
  return (
    <div>
      <div className="body back">
        <h2 className="titulo">Registrate</h2>

        <label className="inputLabel">
          <input type="text" name="usuario" id="usuario" placeholder="Usuario" />
          <i className="fa-solid fa-user fa-2xs"></i>
        </label>

        <label className="inputLabel">
          <input type="email" name="emailSignUp" id="emailSignUp" placeholder="Correo" />
          <i className="fa-solid fa-envelope fa-2xs"></i>
        </label>

        <label className="inputLabel">
          <input type="password" name="passwordSignUp" id="passwordSignUp" placeholder="Contraseña" />
          <i className="fa-solid fa-lock fa-2xs"></i>
        </label>

        <button type="button" id="btnRegistro">Registrar</button>

        <p><a href="#" className="btnLogIn" id="btnLogIn"><span></span>¿Ya tienes una cuenta? Inicia sesión</a></p>
      </div>
    </div>
  )
}

export default Registro