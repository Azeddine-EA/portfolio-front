import {useDispatch, useSelector} from 'react-redux';

export default function Header() {
  const user = useSelector((state) => state.user);

  return (
    <header className="header">
      <a href="#" className="header-brand">
        <span className="header-avatar"><img src="/pdpme.png" alt="avatar"/></span>
        <span className="header-name">EL AIOUD Azeddine</span>
      </a>

      <nav className="header-nav">
            {user.token && (
                  <p>Je suis connecté</p>
                )}
        <a href="#profil">Profil</a>
        {/* <a href="#parcours">Parcours</a> */}
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}