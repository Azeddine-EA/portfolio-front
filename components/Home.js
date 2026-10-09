import styles from "../styles/Home.module.scss";
import styless from "../styles/connexion.module.scss";

import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import Connexion from "./Connexion";
// import Connexion from "../components/Connexion";
import { useRouter } from "next/router";
// import styles from "../styles/projectCard.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home({ showConnexion }) {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [projectData, setProjectData] = useState([]);
  const [langagesData, setLangagesData] = useState([]);
  const [socialsData, setSocialsData] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [outils, setOutils] = useState([]);
  const [link, setLink] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  // const [newProject, setNewProject] = useState(false);
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
// refresh apres la suppression depuis projectCard
  const refreshProjects = () => {
  allProject();
};

  const addProject = () => {
    setNewProject(true);
  };

  useEffect(() => {
    allProject();
    allLanguages();
    allSocials();
  }, []);

  const projetcs = projectData.map((project, i) =>
    project ? <ProjectCard key={i} {...project} refreshProjects={refreshProjects} /> : null,
  );

  const handleCreateProject = async () => {
  try {
    const response = await fetch("http://localhost:3000/project/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        img,
        desc,
        link,
        language: outils.join(","),
        startDate: dateDebut,
        endDate: dateFin,
      }),
    });

    const data = await response.json();

    if (data.result) {
      console.log("Projet créé :", data.project);

      // Réinitialiser le formulaire
      setName("");
      setImg("");
      setDesc("");
      setLink("");
      setOutils([]);
      setDateDebut("");
      setDateFin("");
      setNewProject(false);

      // Actualiser la liste des projets
      allProject();
    } else {
      console.error("Erreur :", data.error);
      alert(data.error || "Impossible de créer le projet.");
    }
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    alert("Impossible de contacter le serveur.");
  }
};





  // console.log(socialsData);
  console.log(router.pathname);
  return (
    <>
      <div className={styles.profil}>
        {showConnexion && <Connexion />}
        <div className={styles.profil_left}>
          <div className={styles.profil_left_text}>
            <h2>Qui suis-je</h2>
            <br />
            <p>
              Bonjour, je suis Azeddine EL AIOUD développeur web full stack
              ReackJS/NextJs, titulaire d’un Bac +3.
              <br />
              Je suis actuellement à la recherche de nouvelles missions, que ce
              soit en freelance ou en emploi, afin de mettre mes compétences au
              service de projets variés et de relever de nouveaux défis.
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
        {!user.token ? (
          <div className={styles.card}>
            <p>Soon</p>
          </div>
        ) : (
          <div className={styles.card}>
            <button className={styles.card_btn} onClick={addProject}>
              Add
            </button>
          </div>
        )}

        <>
          {newProject && (
            <div className={styless.connexion_form}>
              <div className={styless.connexion_form_email}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom du projet"
                />
              </div>
              <div className={styless.connexion_form_email}>
                <label htmlFor="desc">Description</label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Description du projet"
                />
              </div>
              <div className={styless.connexion_form_email}>
                <label htmlFor="desc">Image</label>
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  placeholder="url image du projet"
                />
              </div>
              <div className={styless.connexion_form_email}>
                <label htmlFor="lien">Lien</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="url image du projet"
                />
              </div>
              <div className={styless.connexion_form}>
                <p>Langages et outils</p>

                {langagesData.map((langage) => (
                  <label key={langage._id}>
                    <input
                      type="checkbox"
                      checked={outils.includes(langage.img)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setOutils((prev) => [...prev, langage.img]);
                        } else {
                          setOutils((prev) =>
                            prev.filter((id) => url !== langage.img),
                          );
                        }
                      }}
                    />

                    {langage.name}
                  </label>
                ))}
              </div>
              <div className={styless.connexion_form_email}>
                <label htmlFor="dateDebut">Date de début</label>
                <input
                  id="dateDebut"
                  type="date"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                />
              </div>

              <div className={styless.connexion_form_email}>
                <label htmlFor="dateFin">Date de fin</label>
                <input
                  id="dateFin"
                  type="date"
                  value={dateFin}
                  onChange={(e) => setDateFin(e.target.value)}
                  min={dateDebut || undefined}
                />
              </div>
              <button
                onClick={handleCreateProject}
              >Valider</button>
            </div>
          )}
        </>
      </div>

      <div className={styles.contact}>
        <Contact socials={socialsData} />
      </div>
    </>
  );
}

export default Home;
