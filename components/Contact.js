
import { useState } from "react";
import styles from "../styles/contact.module.scss";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Vérifie si un message a déjà été envoyé
  const lastSent = localStorage.getItem("lastContactSent");

  if (lastSent) {
    const oneHour = 60 * 60 * 1000;
    const timePassed = Date.now() - Number(lastSent);

    if (timePassed < oneHour) {
      const remainingTime = oneHour - timePassed;
      const minutes = Math.ceil(remainingTime / (60 * 1000));

      setStatus(
        `Vous pourrez envoyer un nouveau message dans environ ${minutes} minute${minutes > 1 ? "s" : ""}.`
      );

      return;
    }
  }

  setLoading(true);
  setStatus("");

  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

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
    });

  } catch (error) {
    console.error(error);
    setStatus("Erreur lors de l'envoi du message.");

  } finally {
    setLoading(false);
  }
};
const socialsData = [
    {
      name: "Linkedin",
      img: "linkedin.svg",
      link: "https://www.linkedin.com/in/azeddine-el-aioud-developpement-informatique-alternance/"
    },
    {
      name: "Github",
      img: "github.svg",
      link:"https://github.com/Azeddine-EA?tab=overview&from=2026-10-01&to=2026-10-05"
    },
  ];
 const SocialsContact = socialsData.map((social, i) => {
    return (
      <a href={social.link}>
            <img
        key={i}
        className={`${styles.contact_socials_social} ${styles[`contact_socials_social_${social.name.toLowerCase()}`]}`}
        src={social.img}
        alt={social.name}
      />
        </a>
    );
  });

  return (

<main className={styles.contact}>
  <div className={styles.container}>
    <h1>Me contacter</h1>

    <p className={styles.intro}>
      Une question, un projet ou une opportunité ?
      Envoyez-moi un message.
    </p>

    <form className={styles.form} onSubmit={handleSubmit}>

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
        <div className={styles.contact_socials}>
      {SocialsContact}

    </div>
      </div>

    </form>
    
  </div>
</main>

  );
}

export default Contact;