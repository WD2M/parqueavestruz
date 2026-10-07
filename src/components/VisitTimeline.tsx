import { visitSteps } from "../data/parkData";

export default function VisitTimeline() {
  return (
    <section id="visita" className="section timeline">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            TU VISITA
          </span>

          <h2>
            Así comienza
            <span> la aventura.</span>
          </h2>

          <p>
            Desde tu llegada hasta el último momento,
            queremos que disfrutes cada parte de la experiencia.
          </p>

        </div>

        <div className="timeline__list">

          {visitSteps.map((step) => (
            <article
              className="timeline__item"
              key={step.number}
            >

              <span className="timeline__number">
                {step.number}
              </span>

              <div className="timeline__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}