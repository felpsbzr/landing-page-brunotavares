import DecorativeLeaf from "./DecorativeLeaf";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section section-cream about-section" id="sobre">
      <DecorativeLeaf className="section-leaf about-leaf" />
      <div className="container about-grid">
        <div className="about-intro reveal">
          <SectionHeading eyebrow="Um espaço de escuta" title="Sobre mim" />
          <div className="signature">Bruno Tavares</div>
        </div>

        <div className="about-placeholder reveal reveal-delay">
          <span className="placeholder-kicker">Apresentação</span>
          <p>[Texto sobre o profissional será inserido aqui.]</p>
          <small>
            Este espaço está preparado para receber a apresentação profissional,
            sem adicionar informações que ainda não foram fornecidas.
          </small>
        </div>
      </div>
    </section>
  );
}