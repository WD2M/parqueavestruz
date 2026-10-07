export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          <div className="footer__brand">

            <a href="#inicio" className="navbar__logo">
              <span className="navbar__logo-icon">🦤</span>

              <span>
                Parque
                <strong>Avestruz</strong>
              </span>
            </a>

            <p>
              Una experiencia diferente en el corazón
              del Llano colombiano.
            </p>

          </div>

          <div className="footer__column">

            <h3>Explora</h3>

            <a href="#experiencia">
              Experiencia
            </a>

            <a href="#parque">
              El parque
            </a>

            <a href="#galeria">
              Galería
            </a>

            <a href="#precios">
              Precios
            </a>

          </div>

          <div className="footer__column">

            <h3>Visítanos</h3>

            <a href="#ubicacion">
              Cómo llegar
            </a>

            <a href="#reservar">
              Reservas
            </a>

            <a href="#reservar">
              Contacto
            </a>

          </div>

          <div className="footer__column">

            <h3>Social</h3>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

          </div>

        </div>

        <div className="footer__bottom">

          <span>
            © {new Date().getFullYear()} Parque Avestruz
          </span>

          <span>
            Puerto López · Meta · Colombia
          </span>

        </div>

      </div>

    </footer>
  );
}