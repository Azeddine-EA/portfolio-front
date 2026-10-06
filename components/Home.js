import styles from "../styles/Home.module.scss";
import ProjectCard from './ProjectCard';
import Contact from './Contact';
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
  const [langagesData, setLangagesData] = useState([]);
  const [socialsData, setSocialsData] = useState([]);
  const allLanguages = () => {
      fetch(`http://localhost:3000/technology/languages`)
        .then((response) => response.json())
        .then((data) => setLangagesData(data.languages));
      };
      
      const allSocials = () => {
        fetch(`http://localhost:3000/technology/socials`)
        .then((response) => response.json())
        .then((data) => setSocialsData(data.socials));
      };
    
        
  // const langages = langagesData.map((langage, i) => {
  //   return (
  //     <img
  //       key={i}
  //       className={`${styles.profil_right_imgLogo} ${styles[`profil_right_imgLogo_${langage.name.toLowerCase()}`]}`}
  //       src={langage.img}
  //       alt={langage.name}
  //     />
  //   );
  // });
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
  const Socials = socialsData.map((social, i) => {
    return (
      <a href={social.link}>
            <img
        key={i}
        className={`${styles.profil_right_imgLogo} ${styles[`profil_right_imgLogo_${social.name.toLowerCase()}`]}`}
        src={social.img}
        alt={social.name}
      />
        </a>
    );
  });
  // const SocialsContact = socialsData.map((social, i) => {
  //   return (
  //     <a href={social.link}>
  //           <img
  //       key={i}
  //       className={`${styles.contact} ${styles[`contact_${social.name.toLowerCase()}`]}`}
  //       src={social.img}
  //       alt={social.name}
  //     />
  //       </a>
  //   );
  // });
    // PROJET - FETCH la bdd  exemple
  const allProject = () => {
      fetch(`http://localhost:3000/project/read`)
        .then((response) => response.json())
        .then((data) => setProjectData(data.projects));
  };

  useEffect(() => {
    allProject();
    allLanguages();
    allSocials();

  }, []);

  const projetcs = projectData.map((project, i)=>
    project ? <ProjectCard key={i} {...project}/>: null  );
// console.log(socialsData);
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
        {Socials}
      </div>
    </div> 

    <div className={styles.cards}>
      <h2>Projets</h2>
        {projetcs}
        <div className={styles.card}>
          <p>Soon</p>
        </div>
    </div>

    <div className={styles.contact}>
      <Contact socials={socialsData}/>
    </div>
    </>
  
  );
}

export default Home;
