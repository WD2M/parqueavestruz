export default function About() {
  return (
    <section id="parque" className="section about">

      <div className="container about__grid">

        <div className="about__image">

          <img
            src="/images/about-ostrich.jpg"
            alt="Avestruz en Parque Avestruz"
            loading="lazy"
          />

          <div className="about__badge">
            <span>Desde</span>
            <strong>Puerto López</strong>
            <small>Meta · Colombia</small>
          </div>

        </div>

        <div className="about__content">

          <span className="section-label">
            EL PARQUE
          </span>

          <h2>
            Descubre el mundo de los
            <span> avestruces.</span>
          </h2>

          <p className="about__lead">
            En Hacienda El Diamante encontrarás una experiencia
            diferente para disfrutar en familia, pareja o con amigos.
          </p>

          <p>
            El recorrido te permite conocer de cerca a estos
            extraordinarios animales, aprender sobre ellos y
            disfrutar de un entorno natural único en el Meta.
          </p>

          <div className="about__features">

            <div>
              <span>01</span>
              <strong>Experiencia familiar</strong>
              <p>Un plan para compartir.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Naturaleza</strong>
              <p>Espacios para explorar.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Interacción</strong>
              <p>Conoce de cerca a los avestruces.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}