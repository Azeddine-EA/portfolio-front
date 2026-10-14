import { useState } from "react";
import styles from "../styles/connexion.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducer/user";

function Connexion() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setErrorMessage("");

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pwd }),
      });
      const data = await response.json();
      console.log(data);

      if (data.result) {
        dispatch(
          login({
            token: data.token,
            name: data.name,
            email: data.email,
          }),
        );
        setEmail("");
        setPwd("");
      } else {
        setErrorMessage(data.error || "Identifiants incorrects.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setErrorMessage("Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {!user.token && (
        <div className={styles.connexion}>
          <div className={styles.connexion_form}>
            <div className={styles.connexion_form_email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onKeyDown={onKeyPressHandler}
                placeholder="votre@email.com"
                disabled={isLoading}
              />
            </div>
            <div className={styles.connexion_form_email}>
              <label htmlFor="pwd">Mot de passe</label>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                // onKeyDown={onKeyPressHandler}
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
            <button onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Connexion;
