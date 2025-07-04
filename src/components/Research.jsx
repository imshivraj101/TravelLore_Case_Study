// src/components/Research.jsx
import './Research.css';
import chart1 from '../assets/chart-1.png';
import chart2 from '../assets/chart-2.png';
import personaAnanya from '../assets/persona-ananya.png';

function Research() {
  return (
    <section className="research-section">
      {/* Mission Statement */}
      <div className="research-mission">
        <h2>To create a human-centered solo travel experience</h2>
        <p>
          that not only helps users plan and manage their trips, but also ensures safety, emotional support, and personal storytelling — 
          empowering travelers to explore the world independently, without feeling alone.
        </p>
      </div>

      {/* Research Graphs */}
      <div className="research-charts">
        <h3 className="charts-title">Research</h3>
        <div className="chart">
          <img src={chart1} alt="Top 5 worries" />
        </div>
        <div className="chart">
          <img src={chart2} alt="Stress timeline" />
        </div>
      </div>

      {/* User Persona */}
      <div className="persona-section">
        <h3>User Persona</h3>
        <img src={personaAnanya} alt="Ananya Mehta Persona" className="persona-image" />
      </div>
    </section>
  );
}

export default Research;
