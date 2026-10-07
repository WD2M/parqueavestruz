import { experiences } from "../data/parkData";

export default function Experience() {
  return (
    <section id="experiencia" className="section experience">

      <div className="container">

        <div className="section-heading section-heading--center">

          <span className="section-label">
            LA EXPERIENCIA
          </span>

          <h2>
            Mucho más que una
            <span> visita al parque.</span>
          </h2>

          <p>
            Ven a descubrir un lugar donde la naturaleza,
            los animales y la aventura se encuentran.
          </p>

        </div>

        <div className="experience__grid">

          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.title}
            >
              <div className="experience-card__number">
                0{experiences.indexOf(experience) + 1}
              </div>

              <div className="experience-card__icon">
                {experience.icon}
              </div>

              <h3>{experience.title}</h3>

              <p>{experience.description}</p>

              <span className="experience-card__arrow">
                →
              </span>
            </article>
          ))}

        </div>

      </div>

    </section>
  );
}