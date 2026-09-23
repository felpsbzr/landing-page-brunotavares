import { Menu, X } from "lucide-react";

const links = [
  ["Início", "inicio"],
  ["Sobre mim", "sobre"],
  ["TCC", "tcc"],
  ["Atendimento", "atendimento"],
  ["Contato", "contato"],
];

export default function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Bruno Tavares — início">
          <img src="/logo-bruno-tavares.png" alt="Logo Bruno Tavares" />
          <span className="brand-copy">
            <strong>Bruno Tavares</strong>
            <small>Psicólogo</small>
          </span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-hidden" : ""}`} aria-label="Navegação principal">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
          <a className="nav-cta" href="#contato">Agendar atendimento</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav aria-label="Navegação mobile">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="mobile-cta" href="#contato" onClick={closeMenu}>Agendar atendimento</a>
        </nav>
      </div>
    </header>
  );
}