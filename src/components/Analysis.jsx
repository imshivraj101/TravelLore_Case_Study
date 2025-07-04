// src/components/Analysis.jsx
import './Analysis.css';

function Analysis() {
  return (
    <section className="analysis-section">
      {/* Competitive Analysis */}
      <div className="analysis-box">
        <h2>Analysis</h2>
        <ul>
          <li>Google Travel and TripIt are strong in logistics but lack safety, emotional depth, and personalization.</li>
          <li>Airbnb supports stays but doesn’t aid planning, safety, or solo needs.</li>
          <li>Social media inspires but doesn’t help in execution or safety.</li>
        </ul>
      </div>

      {/* Brainstorming Table */}
      <div className="brainstorm-box">
        <h2>Brainstorming & Ideation</h2>
        <img src="src/assets/Bchart.png" alt="Brainstorming Table" className="brainstorm-img" />
      </div>

      {/* Userflow */}
      <div className="userflow-box">
        <h2>Userflow</h2>
        <img src="src/assets/user-flow.png" alt="Userflow Diagram" className="userflow-img" />
      </div>
    </section>
  );
}

export default Analysis;
