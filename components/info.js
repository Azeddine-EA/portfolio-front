import styles from "../styles/info.module.scss";

function info(projectData) {
  return (
    <div className={styles.info}>
      <div className={styles.info_projet}>
        <img src="/bolt.svg" alt="bolt" className={styles.info_projet_head_title} />
        <h3>Projets réalisés</h3>
        <p>0{Object.keys(projectData).length}+</p>
        <p>Projets développés et mis en pratique <br></br>avec des cas d'usage réels</p>
      </div>
      <div className={styles.info_projet}>
        <div className={styles.info_projet_head}> 
        <p className={styles.info_projet_head_title}>Stack moderne</p>
        <img src="/code.svg" alt="code" className={styles.info_projet_head_logo}/>
        </div>
        <h3>React · Next.js</h3>
        <p>Technologies modernes pour le développement web</p>
      </div>
      <div className={styles.info_projet}>
        <div className={styles.info_projet_head}>
        <p className={styles.info_projet_head_title}>Responsive design</p>
          <img src="/mobile.svg" alt="mobile" className={styles.info_projet_head_logo} />
        </div>
        <h3>100 % adaptable</h3>
        <p>Interfaces adaptées aux mobiles, tablettes et ordinateurs</p>
      </div>
      <div className={styles.info_projet}>
        <div className={styles.info_projet_head}>
          <h3 className={styles.info_projet_head_title}>Front-end + Back-end</h3>
          <img src="/cube.svg" alt="cube" className={styles.info_projet_head_logo} />
        </div>
        <p>développement Full Stack</p>
        <p>Interface soignées, conception d'API RESTful et gestion structurée des bases de données</p>
      </div>
      <div className={styles.info_projet}>
        <div className={styles.info_projet_head}>
        <h3 className={styles.info_projet_head_title}>Qualité du code</h3>
        <img src="/shield.svg" alt="sheild"  className={styles.info_projet_head_logo}/>
        </div>
        <p>Code structuré</p>
        <p>Composants réutilisables et code maintenable</p>
      </div>
    </div>
  );
}
export default info;
