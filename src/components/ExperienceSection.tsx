import React from "react";
import "../css/ExperienceSection.css";

interface Job {
  id: number;
  dateRange: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const experienceData: Job[] = [
  {
    id: 1,
    dateRange: "Jan 2022 - June 2024",
    title: "Team Leader and Avionics Software Developer",
    company: "Capella Rocket Team",
    description:
      "Developed softwares for rocket avionics and ground station systems",
    tags: ["C++", "C", "C#", "STM32", "Qt", "Embedded Systems"],
  },
  {
    id: 2,
    dateRange: "Jan 2023 - June 2024",
    title: "Computer Vision and Avionics Software Developer",
    company: "Alçin Aero Team",
    description:"Developed compueter vision programms and trained custom models for UAVs that can do dogfight and ground station with real time video stream and data fetching from UAVs and lastly developed all of these things work in optimzed way on Nvidia Jetson Xavier using TesnorRT.",
    tags: ["Python", "OpenCV", "C++", "TensorRT", "Qt", "Nvidia Jetson Xavier", "ArduPilot"],
  },
  {
    id: 3,
    dateRange: "Jun 2023 - Oct 2023",
    title: "Junior Software Developer Intern",
    company: "BB Bilişim Teknolojileri",
    description:
      "Developed lot of modules for ERP systems that using Devextreme, NodeJS and C# .NET technologies.",
    tags: ["NodeJS", "C# .NET", "Devextreme", "ERP Systems"],
  },
];

const ProjectTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div
    style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}
  >
    {tags.slice(0, 10).map((t) => (
      <span
        key={t}
        style={{
          fontSize: "0.65rem",
          background: "rgba(88, 240, 181, 0.2)",
          color: "#58f0b5",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {t}
      </span>
    ))}
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-header">// Professional Experience</h2>
      <ul className="timeline">
        {experienceData.map((job) => (
          <li key={job.id} className="timeline-item">
            <p className="timeline-date">{job.dateRange}</p>
            <h3 className="timeline-title">{job.title}</h3>
            <p className="timeline-company">@ {job.company}</p>
            <p className="timeline-description">{job.description}</p>
            <ProjectTags tags={job.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
