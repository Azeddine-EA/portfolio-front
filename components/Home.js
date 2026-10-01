import styles from "../styles/Home.module.scss";
import ProjectCard from './ProjectCard';
// import styles from "../styles/projectCard.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {useCallback, useEffect, useState} from 'react';

function Home() {
  const [projectData, setProjectData] = useState([]);
  const langagesData = [
    {
      name: "Js",
      img: "js.svg",
    },
    {
      name: "Html",
      img: "html.svg",
    },
    {
      name: "Css",
      img: "css.svg",
    },
    {
      name: "React",
      img: "react.svg",
    },
    {
      name: "Node",
      img: "node.svg",
    },
    {
      name: "Bootsrap",
      img: "bootsrap.svg",
    },
    {
      name: "Sass",
      img: "sass.svg",
    },
    {
      name: "Tailwind",
      img: "tailwind.svg",
    },
    {
      name: "Next",
      img: "next.png",
    },
  ];

  const langages = langagesData.map((langage, i) => {
    return (
      <img
        key={i}
        className={`${styles.profil_right_imgLogo} ${styles[`profil_right_imgLogo_${langage.name.toLowerCase()}`]}`}
        src={langage.img}
        alt={langage.name}
      />
    );
  });
  const Outils = langagesData.map((langage, i) => {
    return (
      <img
        key={i}
        className={`${styles.profil_left_imgLogo} ${styles[`profil_left_imgLogo_${langage.name.toLowerCase()}`]}`}
        src={langage.img}
        alt={langage.name}
      />
    );
  });
    // PROJET - FETCH la bdd  exemple
  const allProject = () => {
      fetch(`http://localhost:3000/project/read`)
        .then((response) => response.json())
        .then((data) => setProjectData(data.projects));
  };

  useEffect(() => {
    allProject();
  }, []);

  const projetcs = projectData.map((project, i)=>
    project ? <ProjectCard key={i} {...project}/>: null  );

  return (
    <>
    <div className={styles.profil}>
      <div className={styles.profil_left}>
        <div className={styles.profil_left_text}>
          <h2>Qui suis-je</h2>
          <br />
          <p>
            Bonjour, je suis Azeddine EL AIOUD développeur web full stack
            ReackJS/NextJs, titulaire d’un Bac +3. 
            <br />Je suis actuellement à la recherche de nouvelles missions, que ce soit en freelance ou en emploi, afin de mettre mes compétences au service de projets variés et de relever de nouveaux défis.

          </p>
          <br />
          <p>Mes Principaux Outils:</p>
          <br />
          <div className={styles.profil_left_outils}>{Outils}</div>
        </div>
        <div className={styles.profil_left_btn}></div>
      </div>
      <div className={styles.profil_right}>
        <img className={styles.profil_right_me} src="/pdpme.png" alt="" />
        {langages}
      </div>
    </div> 

    <div className={styles.cards}>
      <h2>Projets</h2>
        {projetcs}
        <div className={styles.card}>
          <p>Soon</p>
        </div>
    </div>
    </>
  
  );
}

export default Home;
