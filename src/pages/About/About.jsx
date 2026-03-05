import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import logo from "../../assets/images/logo.png";
import founderImg from "../../assets/images/doctor.jpg";
import campusImg from "../../assets/images/campus.jpg";
import fayoumUniversityLogo from "../../assets/images/fayoumLogo.png";
import campusEnglish from "../../assets/images/campusEnglish.png";

function About() {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const [isCampusViewerOpen, setIsCampusViewerOpen] = useState(false);
  const [campusImageLang, setCampusImageLang] = useState("default");
  const researchCenters = [
    {
      title: "Large-Scale Research Center",
      description: "Supports applied research and innovation."
    },
    {
      title: "Center for Entrepreneurship & Innovation",
      description: "Fosters startups and creative ideas."
    },
    {
      title: "Community & Environmental Service Center",
      description: "Enhances societal engagement."
    },
    {
      title: "Specialized Training Center",
      description: "Develops faculty, teaching assistants, and staff."
    },
    {
      title: "Alumni Service Unit & Employment Center",
      description: "Provides career guidance and job support."
    },
    {
      title: "Student Service Center",
      description: "Assists students throughout their academic journey."
    }
  ];

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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero reveal" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-brand-row">
              <img src={logo} alt="Al-Fardous University Logo" className="hero-inline-logo" />
              <span>Al-Fardous University</span>
            </div>
            <p className="eyebrow">Founding Vision</p>
            <h1>Where Future Leaders Begin</h1>
            <p>
              Al-Fardous University is being established as a next-generation academic institution in
              Al-Fayoum with a clear mission: quality education, applied research, and strong graduate
              outcomes from day one.
            </p>

            <div className="hero-faculties-cta">
              <p>
                <strong>11 faculties</strong> are being developed to match real market needs in Egypt and
                the region.
              </p>
              <button className="faculties-btn hero-btn" onClick={() => navigate("/faculties")}>
                Explore Faculties
              </button>
            </div>
          </div>

          <div className="hero-mark">
            <img src={logo} alt="Al-Fardous University Logo" />
            <p>Future-ready education rooted in Egyptian academic excellence.</p>
          </div>
        </div>
      </section>

      <section className="about-section reveal" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="identity-grid">
          <article className="identity-card founder-card">
            <img src={"img"} alt="" className="founder-img" />
            <div>
              <h2>Established by Dr. Ahmed Saadawy</h2>
              <p>
                Former Egyptian Parliament Member and distinguished businessman, Dr. Ahmed Saadawy
                founded Al-Fardous University to raise the benchmark of private higher education in Egypt.
              </p>
              <p>
                The university is owned and operated by <strong>Al-Fardous Educational Company</strong>,
                with a focus on sustainable quality, governance, and long-term academic growth.
              </p>
            </div>
          </article>

          <article className="identity-card metrics-card">
            <h3>Launch Strength</h3>
            <div className="metrics-grid">
              <div>
                <span>32</span>
                <p>Feddans of campus development area</p>
              </div>
              <div>
                <span>11</span>
                <p>Planned faculties aligned with market demand</p>
              </div>
              <div>
                <span>1</span>
                <p>Clear mission: high-quality education with employability outcomes</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section reveal collaboration-section" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="collaboration-header">
          <p className="eyebrow">Strategic Collaboration</p>
          <h2>Memorandum of Understanding (MoU) with Fayoum University</h2>
          <p>
            Al-Fardous University highlights its collaboration with Fayoum University through an MoU that
            supports academic advising, quality assurance alignment, and early-stage institutional development.
          </p>
        </div>

        <div className="collaboration-grid">
          <article className="collab-logo-card">
            <img src={fayoumUniversityLogo} alt="Fayoum University Logo" className="fayoum-logo" />
            <p>Official emblem of Fayoum University</p>
            <a href="https://www.fayoum.edu.eg/" target="_blank" rel="noreferrer">
              Visit Fayoum University
            </a>
          </article>

          <article className="collab-content-card">
            <h3>Why this backbone matters for a university under establishment</h3>
            <ul>
              <li>Fayoum University’s longstanding role in Egyptian higher education, combined with its broad academic and research capacity, provides meaningful institutional support through this Memorandum of Understanding.</li>
              <li>This collaboration strengthens Al-Fardous University’s establishment phase by enhancing academic planning, operational preparedness, and credibility within the national higher education landscape.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section reveal" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="campus-container">
          <div className="campus-text">
            <p className="eyebrow">Campus and Location</p>
            <h2>Designed in Al-Fayoum to serve the city and surrounding governorates</h2>
            <p>
              The campus plan is designed for innovation, collaboration, and student-centered learning,
              while the Al-Fayoum location expands access to modern higher education for local communities.
            </p>
          </div>
          <button
            type="button"
            className="campus-image-trigger"
            onClick={() => {
              setCampusImageLang("default");
              setIsCampusViewerOpen(true);
            }}
          >
            <img src={campusEnglish} alt="Al-Fardous University Campus" className="campus-img" />
            <span>Click to view full image</span>
          </button>
        </div>
      </section>

      <section className="about-section reveal" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="centers-section">
          <div className="centers-header">
            <p className="eyebrow">Centers of Excellence & Strengths</p>
            <h2>Research, Innovation, and Service Infrastructure</h2>
            <p>
              Al-Fardous University is planning a strong ecosystem of specialized centers that support
              research quality, entrepreneurship, training, employability, and student success.
            </p>
          </div>

          <div className="centers-grid">
            {researchCenters.map((center, index) => (
              <article key={center.title} className="center-card">
                <span className="center-order">{String(index + 1).padStart(2, "0")}</span>
                <h3>{center.title}</h3>
                <p>{center.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section reveal" ref={(el) => (sectionsRef.current[5] = el)}>
        <div className="location-container">
          <div className="location-text">
            <h2>Located in Al-Fayoum City, Egypt</h2>
            <p>
              A strategic location in Middle Egypt, southwest of Cairo, connecting students from Fayoum
              and neighboring areas to accessible, high-quality education.
            </p>
            <p>
              This location supports Al-Fardous University&apos;s role as a regional knowledge hub from its
              establishment phase onward.
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27832.212898416128!2d30.821686840000158!3d29.31089501923378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459792fa8bf0013%3A0xa698b3d528236f63!2sFaiyum%2C%20Qesm%20Al%20Fayoum%2C%20First%20Al%20Faiyum%2C%20Faiyum%20Governorate!5e0!3m2!1sen!2seg!4v1772684008483!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Faiyum Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="about-section reveal faculties-section" ref={(el) => (sectionsRef.current[6] = el)}>
        <h2>11 Academic Faculties with a clear market-facing direction</h2>
        <p>
          Structured to deliver relevant skills, modern pedagogy, and professional readiness for the
          needs of Egypt and the region.
        </p>

        <button className="faculties-btn" onClick={() => navigate("/faculties")}>
          Explore Faculties
        </button>
      </section>

      {isCampusViewerOpen && (
        <div className="campus-viewer-overlay" onClick={() => setIsCampusViewerOpen(false)}>
          <div className="campus-viewer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="campus-viewer-topbar">
              <button
                type="button"
                className={`campus-lang-btn ${campusImageLang === "english" ? "active" : ""}`}
                onClick={() => setCampusImageLang("english")}
              >
                Arabic
              </button>
              <button
                type="button"
                className={`campus-lang-btn ${campusImageLang === "default" ? "active" : ""}`}
                onClick={() => setCampusImageLang("default")}
              >
                English
              </button>
              <button
                type="button"
                className="campus-close-btn"
                onClick={() => setIsCampusViewerOpen(false)}
              >
                Close
              </button>
            </div>

            {campusImageLang === "default" ? (
              <img src={campusEnglish} alt="Al-Fardous University Campus Full View" className="campus-viewer-image" />
            ) : (
              <div className="campus-placeholder-english">
                <img src={campusImg} alt="Campus  Placeholder" className="campus-viewer-image placeholder-image" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
