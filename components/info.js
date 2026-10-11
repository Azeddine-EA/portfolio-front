import styles from "../styles/info.module.scss";

function info(projectData) {
  return (
    <div className={styles.info}>
      <div className={styles.info_projet}>
        <p>Projet</p>
        {/* {console.log("ici", projectData)} */}
        <p>{Object.keys(projectData).length}</p>
      </div>
      <div className={styles.info_projet}>
        <p>Projet</p>
        {/* {console.log("ici", projectData)} */}
        <p>{Object.keys(projectData).length}</p>
      </div>
      <div className={styles.info_projet}>
        <p>Projet</p>
        {/* {console.log("ici", projectData)} */}
        <p>{Object.keys(projectData).length}</p>
      </div>
    </div>
  );
}
export default info;
