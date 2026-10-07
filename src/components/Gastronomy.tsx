export default function Gastronomy() {
  return (
    <section className="gastronomy">

      <div className="gastronomy__background" />

      <div className="gastronomy__overlay" />

      <div className="container gastronomy__content">

        <span className="section-label section-label--light">
          SABORES DEL PARQUE
        </span>

        <h2>
          Una experiencia que
          <span> también se disfruta.</span>
        </h2>

        <p>
          Descubre una propuesta gastronómica diferente
          durante tu visita al parque.
        </p>

        <a
          href="#reservar"
          className="button button--light"
        >
          Conocer más
          <span>→</span>
        </a>

      </div>

    </section>
  );
}