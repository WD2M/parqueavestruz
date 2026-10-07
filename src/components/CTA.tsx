import { parkInfo } from "../data/parkData";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${parkInfo.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero información para visitar Parque Avestruz."
  )}`;

  return (
    <section id="reservar" className="cta">

      <div className="cta__pattern" />

      <div className="container cta__content">

        <span className="section-label section-label--light">
          ¿LISTO PARA LA AVENTURA?
        </span>

        <h2>
          Tu próxima historia
          <span> comienza aquí.</span>
        </h2>

        <p>
          Ven a conocer Parque Avestruz y vive una experiencia
          diferente en el corazón del Meta.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button button--light button--large"
        >
          <span>💬</span>
          Reservar por WhatsApp
        </a>

      </div>

    </section>
  );
}