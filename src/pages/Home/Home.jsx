import { useEffect, useState } from "react";
import studentImage from "../../assets/images/student.png";
import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${show ? "content-show" : ""}`}>
        <h1 className="title">
          Al Fardous University
        </h1>

        <p className="tagline">
          Where Ambition Meets Excellence
        </p>

        <span className="launch">
          Launching 2027
        </span>

        <div className="buttons">
          <button className="cta-button">
            Join the Early Interest List
          </button>
        </div>
      </div>

      <div className={`hero-image ${show ? "image-show" : ""}`}>
        <img src={studentImage} alt="Student" />
      </div>
    </section>
  );
}

export default Home;