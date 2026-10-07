import { parkInfo } from "../data/parkData";

export default function Pricing() {
  const included = [
    "Ingreso al parque",
    "Inducción",
    "Recorrido guiado",
    "Interacción con avestruces",
    "Espacios naturales",
    "Experiencia para compartir",
  ];

  return (
    <section id="precios" className="section pricing">

      <div className="container pricing__container">

        <div className="pricing__intro">

          <span className="section-label">
            PLANIFICA TU VISITA
          </span>

          <h2>
            Una experiencia
            <span> diferente.</span>
          </h2>

          <p>
            Consulta nuestros planes y prepárate para
            vivir un día diferente en el Meta.
          </p>

          <div className="pricing__note">
            <span>👥</span>
            <div>
              <strong>¿Vienes en grupo?</strong>
              <p>
                Pregunta por nuestras tarifas especiales.
              </p>
            </div>
          </div>

        </div>

        <div className="pricing-card">

          <div className="pricing-card__header">

            <span>ENTRADA GENERAL</span>

            <div className="pricing-card__price">
              {parkInfo.price}
            </div>

            <p>por persona</p>

          </div>

          <div className="pricing-card__divider" />

          <ul>

            {included.map((item) => (
              <li key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}

          </ul>

          <a
            href="#reservar"
            className="button button--primary button--full"
          >
            Reservar mi visita
            <span>→</span>
          </a>

          <small>
            Los precios pueden estar sujetos a cambios.
          </small>

        </div>

      </div>

    </section>
  );
}