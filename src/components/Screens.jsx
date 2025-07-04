// src/components/Screens.jsx
import screen1 from '../assets/screen1.png';
import screen2 from '../assets/screen2.png';
import './Screens.css';

function Screens() {
  return (
    <section className="screens-section">
      <h2 className="screens-title">Screens</h2>

      <div className="screens-image-wrapper">
        <img src={screen1} alt="Screens Group 1" />
      </div>

      <div className="screens-image-wrapper">
        <img src={screen2} alt="Screens Group 2" />
      </div>
    </section>
  );
}

export default Screens;
