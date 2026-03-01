import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import logo from "../../assets/images/logo.png";
import founderImg from "../../assets/images/doctor.jpg";   
import campusImg from "../../assets/images/campus.jpg"; 

function About() {
  const navigate = useNavigate();

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, []);

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        {/* <img src={logo}/> */}
        <h1>About Al-Fardous University</h1>
        <p>A New Era of Academic Excellence in Egypt</p>
      </section>

      {/* FOUNDER SECTION */}
      <section
        className="about-section hidden"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="founder-container">
          <img src={founderImg} alt="Dr Ahmed Saadawy" className="founder-img" />
          <div className="founder-text">
            <h2>Founded by Dr. Ahmed Saadawy</h2>
            <p>
              Former Egyptian Parliament Member and a distinguished businessman
              in Egypt, Dr. Ahmed Saadawy established Al-Fardous University
              with a vision to redefine private higher education.
            </p>
            <p>
              The university is owned and operated by <strong>Al-Fardous Educational Company</strong>,
              a leading institution in education and academic development.
            </p>
          </div>
        </div>
      </section>

      {/* CAMPUS SECTION */}
      <section
        className="about-section hidden"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="campus-container">
          <div className="campus-text">
            <h2>Our Campus</h2>
            <p>
              Built on a vast area of <strong>32 feddans</strong>, the campus is
              thoughtfully designed to foster innovation, collaboration, and
              student success.
            </p>
          </div>
          <img src={campusImg} alt="Campus Drawing" className="campus-img" />
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section
        className="about-section hidden"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="location-container">
          <div className="location-text">
            <h2>Located in Al-Fayoum City</h2>
            <p>
              One of the largest and most populous cities in Egypt,
              located in Middle Egypt southwest of Cairo.
            </p>
            <p>
              The university proudly serves surrounding villages
              and governorates, expanding access to quality education.
            </p>
          </div>

          <div className="map-container">
            <iframe
              title="Al Fayoum Map"
              src="https://www.google.com/maps?q=Al+Fayoum+Egypt&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FACULTIES SECTION */}
      <section
        className="about-section hidden faculties-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2>11 Academic Faculties</h2>
        <p>
          Structured into eleven diverse faculties designed to meet the
          demands of the modern world.
        </p>

        <button
          className="faculties-btn"
          onClick={() => navigate("/faculties")}
        >
          Explore Faculties →
        </button>
      </section>

    </div>
  );
}

export default About;