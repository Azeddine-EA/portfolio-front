import styles from "../styles/projectCard.module.scss";

function ProjectCard(props) {
  return (
      <div className={styles.card}>
      <div className={styles.card_img}>
        {/* <img src="atlasLoot.png" alt="" /> */}
        <img src={props.img} alt={`Aperçu du projet ${props.name}`} />
      </div>

      <div className={styles.card_title}>
        <h3>{props.name}</h3>
      </div>

      <div className={styles.card_desc}>
        <p>{props.desc}</p>
      </div>

      <div className={styles.card_languages}>
        <div>
          {props.language.map((lang, i) => (
            <img key={i} src={lang} alt="" />
          ))}
        </div>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className={styles.card_button} > Voir le site <span>→</span> </a>
      </div>
    </div>
  );
}
export default ProjectCard;
