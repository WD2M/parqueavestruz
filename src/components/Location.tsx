export default function Location() {
  return (
    <section id="ubicacion" className="section location">

      <div className="container location__grid">

        <div className="location__content">

          <span className="section-label">
            CÓMO LLEGAR
          </span>

          <h2>
            Nos vemos en
            <span> el Llano.</span>
          </h2>

          <p>
            Encuentra el camino hacia Hacienda El Diamante
            y prepárate para una experiencia diferente.
          </p>

          <div className="location__details">

            <div>
              <span>📍</span>

              <div>
                <strong>Ubicación</strong>
                <p>
                  Hacienda El Diamante
                  <br />
                  Puerto López, Meta
                </p>
              </div>
            </div>

            <div>
              <span>⏰</span>

              <div>
                <strong>Horario</strong>
                <p>
                  Todos los días
                  <br />
                  9:00 AM — 4:00 PM
                </p>
              </div>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Parque+Avestruz+Puerto+Lopez+Meta"
            target="_blank"
            rel="noreferrer"
            className="button button--dark"
          >
            Abrir en Google Maps
            <span>↗</span>
          </a>

        </div>

        <div className="location__map">

          <div className="location__map-pattern">

            <div className="location__pin">
              📍
            </div>

            <span className="location__map-label">
              Hacienda El Diamante
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}