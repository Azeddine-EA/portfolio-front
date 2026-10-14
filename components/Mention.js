import styles from "../styles/mentions.module.scss";
import Link from "next/link";

function MentionsLegales() {
  const currentYear = new Date().getFullYear();

  return (
    <main className={styles.mentions}>
      <div className={styles.mentions_container}>
        <Link href="/" className={styles.mentions_back}>
          ← Retour à l'accueil
        </Link>

        <header className={styles.mentions_header}>
          <p className={styles.mentions_label}>INFORMATIONS LÉGALES</p>

          <h1>Mentions légales</h1>

          <p>
            Informations relatives à l'édition et à l'utilisation de mon
            portfolio de développeur web.
          </p>
        </header>

        <section className={styles.mentions_section}>
          <h2>1. Édition du site</h2>

          <p>
            Ce site est un portfolio personnel présentant mes compétences, mes
            projets et mes réalisations en développement web Full Stack.
          </p>

          <ul>
            <li>
              <strong>Nom et prénom :</strong> Azeddine EL AIOUD
            </li>
            <li>
              <strong>Statut :</strong> Entrepreneur individuel
            </li>
            <li>
              <strong>Adresse :</strong> Île de France 78130
            </li>
            <li>
              <strong>Numéro SIREN :</strong> 10614264900016
            </li>
            <li>
              <strong>E-mail :</strong>{" "}
              <a href="mailto:azeddine.eadev@gmail.com">
                azeddine.eadev@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.mentions_section}>
          <h2>2. Directeur de la publication</h2>

          <p>
            Le directeur de la publication est Azeddine EL AIOUD, sous réserve
            de confirmation de cette fonction.
          </p>
        </section>

        <section className={styles.mentions_section}>
          <h2>3. Hébergement du site</h2>

          <p>Le site est hébergé par :</p>

          <ul>
            <li>
              <strong>Hébergeur :</strong> Vercel Inc.
            </li>
            <li>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </a>
            </li>
            <li>
              <strong>Adresse :</strong> 440 N Barranca Avenue #4133, Covina, CA
              91723, États-Unis.
            </li>
          </ul>
        </section>

        <section className={styles.mentions_section}>
          <h2>4. Propriété intellectuelle</h2>

          <p>
            Les contenus originaux de ce site, notamment les textes, les
            créations graphiques et les réalisations, sont protégés par les
            règles applicables en matière de propriété intellectuelle.
          </p>

          <p>
            Toute utilisation d'un contenu protégé doit respecter les droits de
            son auteur. Les marques, bibliothèques et ressources appartenant à
            des tiers restent la propriété de leurs titulaires respectifs.
          </p>
        </section>

        <section className={styles.mentions_section}>
          <h2>5. Données personnelles</h2>

          <p>
            Le formulaire de contact permet aux visiteurs d'envoyer une demande
            par l'intermédiaire du site. Les données transmises sont utilisées
            pour traiter et répondre à cette demande.
          </p>

          <p>
            Les informations détaillées sur les données collectées, leur durée
            de conservation, leurs destinataires et les droits des personnes
            concernées sont précisées dans la politique de confidentialité.
          </p>

          <p>
            Pour toute question relative aux données personnelles :{" "}
            <a href="mailto:azeddine.eadev@gmail.com">
              azeddine.eadev@gmail.com
            </a>
          </p>
        </section>

        <section className={styles.mentions_section}>
          <h2>6. Responsabilité</h2>

          <p>
            Les informations publiées sur ce portfolio sont présentées à titre
            informatif. Des erreurs ou omissions peuvent subsister. Les liens
            vers des sites tiers renvoient vers des services dont le contenu
            n'est pas nécessairement contrôlé par l'éditeur du présent site.
          </p>
        </section>

        <section className={styles.mentions_section}>
          <h2>7. Contact</h2>

          <p>
            Pour toute question concernant le site, vous pouvez contacter son
            éditeur à l'adresse suivante :
          </p>

          <a href="mailto:azeddine.eadev@gmail.com">azeddine.eadev@gmail.com</a>
        </section>

        <footer className={styles.mentions_footer}>
          <p>© {currentYear} Azeddine EL AIOUD</p>

          <Link href="/">Retour au portfolio ↑</Link>
        </footer>
      </div>
    </main>
  );
}

export default MentionsLegales;
