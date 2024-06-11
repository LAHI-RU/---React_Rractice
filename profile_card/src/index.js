import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="lahiru.jpg" alt="Lahiru Bandara" />;
}

function Intro() {
  return (
    <div>
      <h1> Lahiru Bandara </h1>
      <p>
        I'm a currently a Computer Science student💻 at Trincomalee Campus,
        Eastern University of Sri Lanka. I'm a passionate learner and a creative
        thinker eager to gain more knowledge of the development world. I'm
        currently focusing on web development,UI UX Design, learning HTML, CSS,
        PHP, and MySQL. I'm excited to start my career in the tech industry and
        I'm open to new opportunities and challenges💯
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightgreen" />
      <Skill skill="HTML+CSS" emoji="😊" color="lightblue" />
      <Skill skill="JavaScript" emoji="✌️" color="yellow" />
      <Skill skill="PHP" emoji="😍" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
