import { useState } from "react";
import styles from "../styles/contact.module.scss";
import { useCallback, useEffect } from "react";

function Contact({ socials }) {
  // console.log(socials);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    typeSite: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  // const [typeSite, setTypeSite] = useState("");
  // const [budget, setBudget] = useState("");
  const [changeforme, setChangeForme] = useState(true);
  // const [socialsData, setSocialsData] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const changeForm = () => {
    setChangeForme((prev) => !prev);
    setActive((prev) => !prev);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const typeForm = e.currentTarget.dataset.typeForm;
    console.log("Type du formulaire :", typeForm);
    console.log("Données envoyées :", form);
    // Vérifie si un message a déjà été envoyé
    const lastSent = localStorage.getItem("lastContactSent");

    if (lastSent) {
      const oneHour = 60 * 60 * 1000;
      const timePassed = Date.now() - Number(lastSent);

      if (timePassed < oneHour) {
        const remainingTime = oneHour - timePassed;
        const minutes = Math.ceil(remainingTime / (60 * 1000));

        setStatus(
          `Vous pourrez envoyer un nouveau message dans environ ${minutes} minute${minutes > 1 ? "s" : ""}.`,
        );

        return;
      }
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          typeForm,
        }),
      });

      const data = await response.json();
      console.log("Réponse du backend :", response.status, data);

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi.");
      }

      // Enregistre l'heure de l'envoi uniquement si Resend a réussi
      localStorage.setItem("lastContactSent", Date.now().toString());

      setStatus("Message envoyé avec succès !");

      setForm({
        name: "",
        email: "",
        message: "",
        budget: "",
        typeSite: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Erreur lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };
  // const allSocials = () => {
  //     fetch(`http://localhost:3000/technology/socials`)
  //       .then((response) => response.json())
  //       .then((data) => setSocialsData(data.socials));
  //     };
  // useEffect(() => {
  //         allSocials();

  // }, []);

  // const SocialsContact = socials.map((social, i) => {
  //   return (
  //     <a href={social.link}>
  //       <img
  //         key={i}
  //         className={`${styles.contact_socials_social} ${styles[`contact_socials_social_${social.name.toLowerCase()}`]}`}
  //         src={social.img}
  //         alt={social.name}
  //       />
  //               <h3>{social.name}</h3>
  //     </a>
  //   );
  // });

  return (
    <main className={styles.contact}>
      <div className={styles.container}>
        <h1>Me contacter</h1>

        <p className={styles.contact_title}>
          Une question, un projet ou une opportunité ? Envoyez-moi un message.
        </p>
        <button onClick={changeForm} className={active ? styles.contact_title_btn_on : styles.contact_title_btn_off}>
          Devis ?
        </button>
        {changeforme ? (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-type-form="contact"
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                rows="7"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.button}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status && (
                <p className={styles.status} role="status">
                  {status}
                </p>
              )}
              {/* <div className={styles.contact_socials}>{SocialsContact}</div> */}
            </div>
          </form>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-type-form="devis"
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.selects}>
              <div className={styles.field}>
                <select
                  id="typeSite"
                  name="typeSite"
                  value={form.typeSite}
                  onChange={handleChange}
                  className={styles.field}
                >
                  <option value="">-- Choisir un type de site --</option>
                  <option value="Vitrine">Site vitrine</option>
                  <option value="E-commerce">Site e-commerce</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Blog">Blog</option>
                </select>
              </div>
              <div className={styles.field}>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez votre budget</option>
                  <option value="Moins de 500 €">Moins de 500 €</option>
                  <option value="500 - 1 000 €">500 - 1 000 €</option>
                  <option value="1 000 - 2 500 €">1 000 - 2 500 €</option>
                  <option value="2 500 - 5 000 €">2 500 - 5 000 €</option>
                  <option value="5 000 € et plus">5 000 € et plus</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                rows="7"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.button}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status && (
                <p className={styles.status} role="status">
                  {status}
                </p>
              )}
              {/* <div className={styles.contact_socials}>{SocialsContact}</div> */}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;
