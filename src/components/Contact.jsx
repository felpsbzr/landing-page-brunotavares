import { ArrowUpRight, Instagram } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL } from "../constants";

export default function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow light-eyebrow">Contato</span>
          <h2>Vamos conversar?</h2>
          <p>
            Se você deseja saber mais sobre o atendimento psicológico, entre em contato.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="button button-light button-large"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato <ArrowUpRight size={18} />
          </a>

          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={17} /> Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
              <span className="tiktok-mark">♪</span> TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}