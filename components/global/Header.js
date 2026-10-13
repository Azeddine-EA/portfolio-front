import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../reducer/user";
// import '../../styles/header.module.scss';


export default function Header() {
  const user = useSelector((state) => state.user);
  const [disconnect, setDisconnect] = useState(false);
  const [active, setActive] = useState(false);
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

    const changeNav = () => {
    setActive(!active);

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
        <a href="#infos">Info</a>
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
    {!active ? (
            <button onClick={changeNav} className="header-btn_nav" >
               <img src="/bars.svg" alt="menu bars" />
              </button>
    ):(      <button onClick={changeNav} className="header-btn_nav" >
               <img src="/xmark.svg" alt="menu bars" />
              </button>)}

      <nav className={active ? "header-nav_side_on" : "header-nav_side_off"}>
        <a href="#profil">Profil</a>
        {/* <a href="#parcours">Parcours</a> */}
        <a href="#projets">Projets</a>
        <a href="#infos">Info</a>
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
