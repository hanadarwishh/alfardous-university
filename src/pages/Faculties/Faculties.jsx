import { useState } from "react";
import "./Faculties.css";
import medicineImage from "../../assets/icons/medicine.png"
import physicalTherapyImage from "../../assets/icons/physicalTherapy.png"
import nursingImage from "../../assets/icons/nursing.png"
import appliedSciencesImage from "../../assets/icons/appliedSciences.png"
import engineeringImage from "../../assets/icons/engineering.png"
import energyImage from "../../assets/icons/energy.png"



function FacultyCard({ title, programs, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faculty-card ${open ? "open" : ""}`}>
      <div className="faculty-front">
        <div className="faculty-icon">
          <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? "Hide Programs" : "View Programs"}
        </button>
      </div>

      {open && (
        <div className="faculty-programs">
          {programs.map((program, index) => (
            <p key={index}>• {program}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function Faculties() {
  const faculties = [
    {
      title: "Faculty of Medicine",
      icon: medicineImage,
      programs: []
    },
    {
      title: "Faculty of Physical Therapy",
      icon: physicalTherapyImage,
      programs: []
    },
    {
      title: "Faculty of Nursing",
      icon: nursingImage,
      programs: []
    },
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
    {
      title: "Faculty of Renewable Energy & Environmental Technology",
      icon: energyImage,
      programs: []
    },
    {
      title: "Faculty of Computer & AI Sciences",
      icon: "/icons/ai.png",
      programs: [
        "Artificial Intelligence",
        "Software",
        "Networks",
        "Cybersecurity",
        "Information Systems"
      ]
    },
    {
      title: "Faculty of Agricultural & Life Sciences Technology",
      icon: "/icons/agriculture.png",
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
      icon: "/icons/art.png",
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
      icon: "/icons/business.png",
      programs: [
        "International Business",
        "Marketing",
        "Public Relations",
        "Digital Archiving"
      ]
    },
    {
      title: "Faculty of Languages & Translation",
      icon: "/icons/languages.png",
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

  return (
    <div className="faculties-page">
      <div className="faculties-hero">
        <h1>Our 11 Academic Faculties</h1>
        <p>Building the Future Across Disciplines</p>
      </div>

      <div className="faculties-grid">
        {faculties.map((faculty, index) => (
          <FacultyCard
            key={index}
            title={faculty.title}
            programs={faculty.programs}
            icon={faculty.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Faculties;