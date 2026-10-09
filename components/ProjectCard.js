import styles from "../styles/projectCard.module.scss";
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ProjectCard(props) {
  const user = useSelector((state) => state.user);

const deleteProject = async (idProject) => {
  try {
    const response = await fetch(
      `http://localhost:3000/project/delete/${idProject}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.result) {
      console.log("Projet supprimé :", data.project);
      props.refreshProjects();

      // Actualiser la liste des projets
      allProject();
    } else {
      console.error("Erreur lors de la suppression");
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
  }
};
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
          <h5>Outils Utilisé</h5>
          <div>
            {props.language.map((lang, i) => (
              <img key={i} src={lang} alt=""/>
            ))}
          </div>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card_button}
          >
            {" "}
            Voir le site <span>→</span>{" "}
          </a>
        </div>
           <button
          onClick={() => deleteProject(props._id)}
          className={styles.card_button}
        >
          supprimer
        </button>
      </div>

  );
}
export default ProjectCard;
