
import styles from "../../styles/footer.module.scss";

import {
  Code2,
  Mail,
  Linkedin,
  Github,
  ArrowUp,
  BriefcaseBusiness,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footer_container}>

        {/* Présentation */}
        <div className={styles.footer_top}>
          <div className={styles.footer_identity}>
            <div className={styles.footer_logo}>
              <Code2 size={28} />
            </div>

            <div>
              <h2>Azeddine EL AIOUD</h2>
              <p>Développeur Web Full Stack</p>
            </div>
          </div>

          <p className={styles.footer_description}>
            Vous avez un projet web ou une opportunité professionnelle ?
            Échangeons ensemble.
          </p>

          {/* Réseaux sociaux */}
          <div className={styles.footer_socials}>
            <a
              href="mailto:azeddine.eadev@gmail.com"
              aria-label="Envoyer un e-mail"
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>

            <a
              href="https://www.linkedin.com/in/azeddine-el-aioud-developpement-informatique-alternance/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mon profil LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Azeddine-EA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mon profil GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Disponibilité */}
          <div className={styles.footer_availability}>
            <BriefcaseBusiness size={18} />
            <span>
              Ouvert aux opportunités professionnelles et aux missions freelance
            </span>
          </div>
        </div>


        <div className={styles.footer_bottom}>
          <p>© {currentYear} Azeddine EL AIOUD. Tous droits réservés.</p>

          <div className={styles.footer_bottom_links}>
            <a href="/mention">Mentions légales</a>
            <span>Développé avec React & Next.js</span>
          </div>

          <a className={styles.footer_top_button} href="#header" aria-label="Retour en haut">
            <ArrowUp size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
