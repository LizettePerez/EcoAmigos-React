import '../index.css';
import PaperImg from '../assets/paper.png';
import GlassImg from '../assets/glass.png';
import PlasticImg from '../assets/plastic.png';

function Reciclaje() {
  return (
    <div>
      <section className="recycle" id="reciclaje">
        <h2 className="titleCenter titulo">Reciclaje <span className="green">Responsable</span></h2>
        <section className="recycleContainer">
          <div className="recycleBox">
            <img src={PlasticImg} alt="plastic" className="recycleImg" />
            <div className="recycleBody">
              <h3>Reciclaje de Plástico</h3>
              <p>Reciclar plástico reduce la contaminación y ayuda a conservar los recursos naturales. Asegúrate de
                separar
                tus botellas y envases plásticos para un reciclaje responsable.</p>
            </div>
          </div>
          <div className="recycleBox">
            <img src={GlassImg} alt="glass" className="recycleImg" />
            <div className="recycleBody">
              <h3>Reciclaje de Vidrio</h3>
              <p>El reciclaje de vidrio ayuda a disminuir la cantidad de residuos en vertederos y ahorra energía. No
                olvides separar tus envases de vidrio para reciclarlos.</p>
            </div>
          </div>
          <div className="recycleBox">
            <img src={PaperImg} alt="paper" className="recycleImg" />
            <div className="recycleBody">
              <h3>Reciclado de Papel</h3>
              <p>El reciclaje de papel y cartón contribuye a la conservación de los árboles y a la reducción de desechos.
                Separa tus cajas de cartón y papel para su reciclaje adecuado.</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Reciclaje;