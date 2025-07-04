import mascot from '../assets/staryy.png';
import './Header.css';

function Header() {
  return (
    <section className="hero">
      <div className="header-top">
        <span className="left-name">Shivraj Talekar</span>
        <span className="right-name">Om Birla</span>
      </div>

      <div className="hero-overlay">
        <div className="hero-right">
          <img src={mascot} alt="Travel-Lore Mascot" className="hero-avatar hero-avatar-above" />
          <h1 className="hero-name">Travel-Lore</h1>
          <p className="hero-subtitle">Reimagining solo-travel for safety & self discovery</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
