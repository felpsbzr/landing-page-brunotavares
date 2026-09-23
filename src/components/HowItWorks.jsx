import SectionHeading from "./SectionHeading";

const steps = [
  ["01", "Entre em contato"],
  ["02", "Converse sobre o atendimento"],
  ["03", "Encontre um horário"],
  ["04", "Inicie seu acompanhamento"],
];

export default function HowItWorks() {
  return (
    <section className="section how-section" id="como-funciona">
      <div className="container">
        <SectionHeading eyebrow="Primeiros passos" title="Como funciona" />

        <div className="how-grid">
          {steps.map(([number, title], index) => (
            <article className="how-item reveal" key={number}>
              <span className="how-number">{number}</span>
              <div className="how-line" aria-hidden="true" />
              <h3>{title}</h3>
              {index < steps.length - 1 && <span className="how-arrow" aria-hidden="true">→</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}