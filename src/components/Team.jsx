// src/components/Team.jsx
import './Team.css';

function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title">Minds behind Travel-Lore</h2>

      <div className="team-members">
        <div className="team-member">
          <a href="https://www.linkedin.com/in/shivraj-talekar-259099336/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/shivraj.jpeg" alt="Shivraj Talekar" className="team-photo" />
            <h3 className="member-name">Shivraj Talekar</h3>
          </a>
          <p className="member-role">UI/UX  Research &<br />Conceptualization</p>
        </div>

        <div className="team-member">
          <a href="https://www.linkedin.com/in/ombirla/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/om.jpeg" alt="Om Birla" className="team-photo" />
            <h3 className="member-name">Om Birla</h3>
          </a>
          <p className="member-role">UI/UX  Research &<br />Prototyping</p>
        </div>
      </div>

      <div className="team-message">
        <p>
          Solo travel isn’t about where you go. It’s about who you become.<br />
          But today’s tools only focus on logistics & not the journey within.<br />
          <strong>Travel-Lore</strong> isn’t just a planner. It’s a companion.<br />
          It guides you, protects you, and captures your story,<br />
          so you don’t just travel alone... you grow through it.
        </p>
      </div>
    </section>
  );
}

export default Team;
