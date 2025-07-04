// src/components/Journey.jsx
import './Journey.css';

function Journey() {
  return (
    <section className="journey-section">
      <h2 className="journey-title">Journey to the Solution</h2>

      {/* Step 1 */}
      <div className="journey-step">
        <h3>1. The Realization</h3>
        <div className="journey-card">
          <p><strong>Why does solo travel feel so overwhelming?</strong></p>
          <hr />
          <p className="insights-title">Insights:</p>
          <ul>
            <li>Solo travelers juggle safety, logistics, and emotions</li>
            <li>Existing tools are fragmented and impersonal</li>
          </ul>
        </div>
      </div>

      {/* Step 2 */}
      <div className="journey-step">
        <h3>2. User Research</h3>
        <div className="journey-card">
          <p><strong>Targeted:</strong> Students, Digital Nomads & Solo Travelers</p>
          <hr />
          <p className="insights-title">Pain Points:</p>
          <ul>
            <li>“Planning is exhausting”</li>
            <li>“I feel unsafe or unsupported”</li>
            <li>“I forget to capture the story”</li>
          </ul>
        </div>
      </div>

      {/* Step 3 */}
      <div className="journey-step">
        <h3>3. Reframe the Problem</h3>
        <div className="journey-card">
          <p><strong>New Design Challenge:</strong></p>
          <hr />
          <p className="journey-list-item">"How might we create a travel companion, not just another travel tool?"</p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="journey-step">
        <h3>4. Ideation & Core Concepts</h3>
        <div className="journey-card">
          <p><strong>Brainstormed Features:</strong></p>
          <hr />
          <ul>
            <li>Smart planner + budget tool</li>
            <li>Safety mode for real-time tracking</li>
            <li>Reflective journaling with AI</li>
            <li>Conversational assistant (STARY)</li>
          </ul>
        </div>
      </div>

      {/* Step 5 */}
      <div className="journey-step">
        <h3>5. The Solution: Travel-Lore</h3>
        <div className="journey-card">
          <p><strong>One platform for:</strong></p>
          <hr />
          <ul>
            <li>Planning with intelligence</li>
            <li>Traveling with safety</li>
            <li>Reflecting with soul</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Journey;
