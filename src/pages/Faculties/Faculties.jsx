import { useEffect, useState } from "react";
import "./Faculties.css";
import medicineImage from "../../assets/icons/medicine.png";
import physicalTherapyImage from "../../assets/icons/physicalTherapy.png";
import nursingImage from "../../assets/icons/nursing.png";
import appliedSciencesImage from "../../assets/icons/appliedSciences.png";
import engineeringImage from "../../assets/icons/engineering.png";
import energyImage from "../../assets/icons/energy.png";
import csaiImage from "../../assets/icons/csai.png";
import agricultureImage from "../../assets/icons/agriculture.png";
import businessImage from "../../assets/icons/business.png";
import artImage from "../../assets/icons/art.png";
import languagesImage from "../../assets/icons/languages.png";

const faculties = [
  { title: "Faculty of Medicine", icon: medicineImage, programs: [] },
  { title: "Faculty of Physical Therapy", icon: physicalTherapyImage, programs: [] },
  { title: "Faculty of Nursing", icon: nursingImage, programs: [] },
  {
    title: "Faculty of Applied Medical Sciences",
    icon: appliedSciencesImage,
    programs: ["Radiology", "Laboratory", "Optics", "Anatomy", "Physiology"]
  },
  {
    title: "Faculty of Engineering",
    icon: engineeringImage,
    programs: [
      "Mechatronics Engineering",
      "Artificial Intelligence Engineering",
      "Communications Engineering",
      "Civil & Structural Engineering",
      "Architectural Engineering"
    ]
  },
  { title: "Faculty of Renewable Energy & Environmental Technology", icon: energyImage, programs: [] },
  {
    title: "Faculty of Computer & AI Sciences",
    icon: csaiImage,
    programs: ["Artificial Intelligence", "Software", "Networks", "Cybersecurity", "Information Systems"]
  },
  {
    title: "Faculty of Agricultural & Life Sciences Technology",
    icon: agricultureImage,
    programs: [
      "Biotechnology",
      "Soil Reclamation",
      "Animal Production",
      "Poultry",
      "Food Science",
      "Agricultural Engineering"
    ]
  },
  {
    title: "Faculty of Creative & Heritage Arts",
    icon: artImage,
    programs: [
      "Fashion Design",
      "Interior Design",
      "Industrial Design",
      "Traditional & Handicraft Arts",
      "Heritage Restoration"
    ]
  },
  {
    title: "Faculty of Management & Media Technology",
    icon: businessImage,
    programs: ["International Business", "Marketing", "Public Relations", "Digital Archiving"]
  },
  {
    title: "Faculty of Languages & Translation",
    icon: languagesImage,
    programs: [
      "English Language",
      "Malaysian Language",
      "Chinese Language",
      "Japanese Language",
      "Korean Language",
      "Arabic for Non-Native Speakers"
    ]
  }
];

function FacultyCard({ title, programs, icon, order }) {
  const [open, setOpen] = useState(false);
  const hasPrograms = programs.length > 0;

  return (
    <article className={`faculty-card ${open ? "open" : ""}`}>
      <div className="faculty-order">{String(order).padStart(2, "0")}</div>

      <div className="faculty-top">
        <div className="faculty-icon">
          <img src={icon} alt={title} />
        </div>
        {hasPrograms && <span className="faculty-tag">{programs.length} Programs</span>}
      </div>

      <h3>{title}</h3>

      {hasPrograms && (
        <>
          <button type="button" className="faculty-btn" onClick={() => setOpen((prev) => !prev)}>
            {open ? "Hide Programs" : "Show Programs"}
          </button>

          {open && (
            <ul className="faculty-programs">
              {programs.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </article>
  );
}

function Faculties() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="faculties-page">
      <section className="faculties-hero">
        <p className="hero-kicker">Academic Structure</p>
        <h1>Explore the 11 Faculties of Al-Fardous University</h1>
        <p>
          Navigate clearly through all faculties in order. Open any faculty card to view its programs.
        </p>
      </section>

      <section className="faculties-grid">
        {faculties.map((faculty, index) => (
          <FacultyCard
            key={faculty.title}
            title={faculty.title}
            programs={faculty.programs}
            icon={faculty.icon}
            order={index + 1}
          />
        ))}
      </section>
    </div>
  );
}

export default Faculties;


