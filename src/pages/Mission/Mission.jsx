import { useEffect, useRef } from "react";
import "./Mission.css";

const missionPoints = [
  "To empower students with knowledge, skills, and innovation for global competitiveness.",
  "To integrate science, community service, and entrepreneurship into academic excellence."
];

function VisionMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-wrapper" ref={sectionRef}>
      <div className="vision-bg-shape vision-bg-shape-one"></div>
      <div className="vision-bg-shape vision-bg-shape-two"></div>

      <div className="vision-shell">
        <header className="vision-header">
          <p className="vision-kicker">Vision & Mission</p>
          <h2>Building a University with Purpose</h2>
        </header>

        <article className="vision-anchor card-fade">
          <span className="card-label">Vision</span>
          <p>To be a leading institution in higher education and research in Egypt.</p>
        </article>

        <div className="mission-track card-fade">
          {missionPoints.map((point, index) => (
            <article key={point} className="mission-node">
              <span className="node-index">0{index + 1}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>

        <article className="beacon card-fade">
          <span className="card-label">Declaration</span>
          <h3>
            Al-Fardous University will stand as a beacon of knowledge, research, and innovation in Egypt,
            committed to shaping future leaders and serving the community.
          </h3>
        </article>
      </div>
    </section>
  );
}

export default VisionMission;
