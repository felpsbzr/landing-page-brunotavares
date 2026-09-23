import SectionHeading from "./SectionHeading";

const items = [
  ["Pensamentos", "Como interpretamos e damos significado às situações."],
  ["Emoções", "O que sentimos diante dessas interpretações."],
  ["Comportamentos", "Como respondemos, escolhemos e agimos."],
];

export default function CBTSection() {
  return (
    <section className="section cbt-section" id="tcc">
      <div className="container">
        <SectionHeading
          eyebrow="A abordagem"
          title="Terapia Cognitivo-Comportamental"
        >
          A Terapia Cognitivo-Comportamental busca compreender a relação entre
          pensamentos, emoções e comportamentos, ajudando o paciente a perceber
          padrões e desenvolver novas formas de lidar com diferentes situações.
        </SectionHeading>

        <div className="cbt-flow">
          {items.map(([title, text], index) => (
            <div className="cbt-step reveal" key={title}>
              <span className="step-number">0{index + 1}</span>
              <div className="cbt-dot" />
              <h3>{title}</h3>
              <p>{text}</p>
              {index < items.length - 1 && <span className="flow-arrow">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}