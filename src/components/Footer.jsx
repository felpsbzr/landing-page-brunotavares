import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL } from "../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-name">Bruno Tavares</div>
          <div className="footer-role">Psicólogo <span>|</span> CRP 15/6694</div>
        </div>

        <div className="footer-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram size={16} /> Instagram
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
            <span className="tiktok-mark">♪</span> TikTok
          </a>
        </div>

        <div className="footer-copy">© {new Date().getFullYear()} Bruno Tavares. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}