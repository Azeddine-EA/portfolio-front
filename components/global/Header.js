import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../reducer/user";

export default function Header() {
  const user = useSelector((state) => state.user);
  const [disconnect, setDisconnect] = useState(false);
  const dispatch = useDispatch();

  const openDisconnect = () => {
    setDisconnect(true);
    // setIsLoginOpen(true);
  };

  const closeDisconnect = () => {
    setDisconnect(false);
    // setIsLoginOpen(true);
  };
  const letsDisconnect = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <a href="#" className="header-brand">
        <span className="header-avatar">
          <img src="/pdpme.png" alt="avatar" />
        </span>
        <span className="header-name">EL AIOUD Azeddine</span>
      </a>

      <nav className="header-nav">
        <a href="#profil">Profil</a>
        {/* <a href="#parcours">Parcours</a> */}
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        {user.token && <button onClick={openDisconnect}>Se déconnecter</button>}
        {disconnect && (
          <div>
            <button
              onClick={() => {
                letsDisconnect();
                closeDisconnect();
              }}
            >
              Confirmer
            </button>
            <button onClick={closeDisconnect}>Annuler</button>
          </div>
        )}
      </nav>
    </header>
  );
}
