import DecorativeLeaf from "./DecorativeLeaf";
import SectionHeading from "./SectionHeading";

export default function Audience() {
  return (
    <section className="section audience-section" id="atendimento">
      <DecorativeLeaf className="section-leaf audience-leaf" />
      <div className="container">
        <SectionHeading
          light
          eyebrow="Para quem é"
          title="Atendimento para adolescentes e adultos"
        >
          O acompanhamento psicológico é direcionado a adolescentes e adultos,
          utilizando a Terapia Cognitivo-Comportamental como abordagem.
        </SectionHeading>

        <div className="audience-list">
          <div className="audience-item reveal">
            <span>01</span>
            <h3>Adolescentes</h3>
            <p>Um espaço de escuta e acompanhamento respeitoso.</p>
          </div>
          <div className="audience-item reveal reveal-delay">
            <span>02</span>
            <h3>Adultos</h3>
            <p>Um espaço para compreender, cuidar e construir novos caminhos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}