import { ArrowDown, ArrowUpRight } from "lucide-react";
import DecorativeLeaf from "./DecorativeLeaf";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grain" aria-hidden="true" />
      <DecorativeLeaf className="hero-leaf hero-leaf-one" />
      <DecorativeLeaf className="hero-leaf hero-leaf-two" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow hero-eyebrow">Psicologia clínica</span>
          <p className="hero-name">Bruno Tavares</p>
          <p className="hero-role">Psicólogo <span>|</span> CRP 15/6694</p>

          <h1>Um espaço para se compreender, cuidar de si e construir novos caminhos.</h1>

          <p className="hero-description">
            Atendimento psicológico com base na
            Terapia Cognitivo-Comportamental.
          </p>

          <div className="hero-actions">
            <a className="button button-light" href="#contato">
              Agendar atendimento <ArrowUpRight size={17} />
            </a>
            <a className="button button-outline-light" href="#sobre">
              Conheça meu trabalho
            </a>
          </div>

          <a className="hero-scroll" href="#sobre" aria-label="Ir para Sobre mim">
            <span>Conheça o espaço</span>
            <ArrowDown size={15} />
          </a>
        </div>

        <div className="hero-logo-wrap reveal reveal-delay">
          <div className="hero-logo-frame">
            <img
              src="/logo-bruno-tavares.png"
              alt="Logo oficial de Bruno Tavares: cérebro integrado a elementos botânicos, nome e registro profissional"
            />
          </div>
          <span className="hero-caption">Pensamentos, emoções e comportamentos</span>
        </div>
      </div>
    </section>
  );
}