
export default function Header() {

  return (
    <header className="header">
      <a href="#" className="header-brand">
        <span className="header-avatar"><img src="/pdpme.png" alt="avatar"/></span>
        <span className="header-name">EL AIOUD Azeddine</span>
      </a>

      <nav className="header-nav">
        <a href="#profil">Profil</a>
        {/* <a href="#parcours">Parcours</a> */}
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}