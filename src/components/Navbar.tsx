import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">

        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">🦤</span>

          <span>
            Parque
            <strong>Avestruz</strong>
          </span>
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
          <a href="#experiencia" onClick={closeMenu}>
            Experiencia
          </a>

          <a href="#parque" onClick={closeMenu}>
            El parque
          </a>

          <a href="#visita" onClick={closeMenu}>
            Tu visita
          </a>

          <a href="#galeria" onClick={closeMenu}>
            Galería
          </a>

          <a href="#precios" onClick={closeMenu}>
            Precios
          </a>

          <a href="#ubicacion" onClick={closeMenu}>
            Cómo llegar
          </a>

          <a
            href="#reservar"
            className="navbar__button"
            onClick={closeMenu}
          >
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}