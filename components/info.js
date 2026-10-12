import styles from "../styles/info.module.scss";

function info(projectData) {
  return (
    <div className={styles.info}>
      <div className={styles.info_projet}>
        <h3>Projets réalisés</h3>
        <p>0{Object.keys(projectData).length}+</p>
        <p>Projets développés et mis en pratique</p>
      </div>
      <div className={styles.info_projet}>
        <p>Stack moderne</p>
        <h3>React · Next.js</h3>
        <p>Technologies modernes pour le développement web</p>
      </div>
      <div className={styles.info_projet}>
        <p>Responsive design</p>
        <h3>100 % adaptable</h3>
        <p>Interfaces adaptées aux mobiles, tablettes et ordinateurs</p>
      </div>
      <div className={styles.info_projet}>
        <h3>Qualité du code</h3>
        <p>Code structuré</p>
        <p>Composants réutilisables et code maintenable</p>
      </div>
    </div>
  );
}
export default info;
