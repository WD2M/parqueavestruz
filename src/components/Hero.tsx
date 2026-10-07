import { parkInfo } from "../data/parkData";

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero__background" />

      <div className="hero__overlay" />

      <div className="container hero__container">

        <div className="hero__content">

          <span className="hero__eyebrow">
            HACIENDA EL DIAMANTE · META
          </span>

          <h1>
            Una experiencia
            <span> que no olvidarás.</span>
          </h1>

          <p>
            Conoce, alimenta y comparte con los avestruces
            en el corazón del Llano colombiano.
          </p>

          <div className="hero__actions">

            <a
              href="#reservar"
              className="button button--primary"
            >
              Reservar mi visita
              <span>→</span>
            </a>

            <a
              href="#experiencia"
              className="button button--ghost"
            >
              Descubrir el parque
            </a>

          </div>

          <div className="hero__information">

            <div>
              <span>📍</span>
              <p>
                <strong>Ubicación</strong>
                {parkInfo.location}
              </p>
            </div>

            <div>
              <span>⏰</span>
              <p>
                <strong>Horario</strong>
                {parkInfo.schedule}
              </p>
            </div>

          </div>

        </div>

      </div>

      <a href="#experiencia" className="hero__scroll">
        <span>Descubre más</span>
        <span className="hero__scroll-line" />
      </a>

    </section>
  );
}