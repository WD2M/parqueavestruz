import { gallery } from "../data/parkData";

export default function Gallery() {
  return (
    <section id="galeria" className="section gallery">

      <div className="container">

        <div className="section-heading section-heading--center">

          <span className="section-label">
            GALERÍA
          </span>

          <h2>
            Momentos que
            <span> se quedan contigo.</span>
          </h2>

          <p>
            Descubre algunos de los momentos que podrás
            vivir durante tu visita.
          </p>

        </div>

        <div className="gallery__grid">

          {gallery.map((item, index) => (
            <div
              className={`gallery__item gallery__item--${item.size ?? "normal"}`}
              key={`${item.image}-${index}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery__overlay">
                <span>Ver experiencia</span>
                <span>↗</span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}