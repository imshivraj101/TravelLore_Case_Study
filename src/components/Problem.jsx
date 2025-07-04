// src/components/Problem.jsx
import './Problem.css';

function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-content">
        <img src="src/assets/thinking.png" alt="Problem Visual" className="problem-image thinking-img" />

        <div className="problem-text">
          <h2 className="problem-heading">Problem Statement</h2>
          <p className="problem-para">
            Most travel tools focus only on logistics, ignoring the emotional and safety challenges solo travelers face —
            like stress, budget worries, and lack of support. As a result, travelers often feel overwhelmed and
            disconnected. There’s no single platform that truly supports, protects, and grows with solo travelers
            throughout their journey.
          </p>
        </div>
      </div>

      <h2 className="solution-heading">Crafted Solution</h2>
      <img src="src/assets/mockup.png" alt="Crafted Solution Screens" className="solution-image mockup-img" />
    </section>
  );
}

export default Problem;
