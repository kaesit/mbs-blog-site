import React from 'react';
import '../css/ExperienceSection.css';

interface Job {
  id: number;
  dateRange: string;
  title: string;
  company: string;
  description: string;
}

const experienceData: Job[] = [
  {
    id: 1,
    dateRange: 'Jan 2023 - Present',
    title: 'Senior Frontend Architect',
    company: 'Quantum Dynamics Inc.',
    description: 'Spearheaded the migration of legacy codebase to TypeScript/React and established CI/CD pipelines using GitHub Actions, resulting in a 30% reduction in production bugs.',
  },
  {
    id: 2,
    dateRange: 'Jul 2020 - Dec 2022',
    title: 'Full-Stack Developer',
    company: 'Synergy Tech Solutions',
    description: 'Developed scalable RESTful APIs using Node.js and implemented responsive UIs using functional React components and CSS-in-JS libraries.',
  },
  {
    id: 3,
    dateRange: 'Aug 2018 - Jun 2020',
    title: 'Junior Web Developer',
    company: 'Local Digital Agency',
    description: 'Contributed to numerous client websites, focusing on performance optimization and cross-browser compatibility using plain HTML, CSS, and vanilla JavaScript.',
  },
];

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;