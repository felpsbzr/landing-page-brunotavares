import DecorativeLeaf from "./DecorativeLeaf";
import SectionHeading from "./SectionHeading";

export default function SocialVacancies() {
  return (
    <section className="section social-section">
      <DecorativeLeaf className="section-leaf social-leaf" />
      <div className="container social-inner">
        <SectionHeading eyebrow="Acesso" title="Vagas sociais">
          Algumas vagas sociais podem estar disponíveis. Entre em contato para
          consultar a disponibilidade.
        </SectionHeading>
        <a className="text-link" href="#contato">
          Consultar disponibilidade <span>↗</span>
        </a>
      </div>
    </section>
  );
}