import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import campusPlanImage from "../../assets/images/fardousCampus.png";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 180);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home">
      <div className="home-plan-bg" aria-hidden="true">
        <img src={campusPlanImage} alt="" />
      </div>
      <div className="home-shade" aria-hidden="true"></div>

      <div className={`home-shell ${loaded ? "show" : ""}`}>
        <span className="badge">Under Establishment</span>
        <h1>Al-Fardous University</h1>
        <p>Under establishment in Al-Fayoum.</p>

        <div className="home-actions">
          <button type="button" className="outline-btn" onClick={() => navigate("/about")}>
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
