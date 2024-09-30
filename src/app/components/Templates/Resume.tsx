"use client";
import React, { useState } from 'react';

const Resume: React.FC = () => {
  // Define your state for dynamic data
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Md Jahid Hasan Pintu',
    email: 'mail@pintu.com',
    website: 'https://jahidhasanpintu.com',
    mobile: '+8801748284223',
  });

  const [education, setEducation] = useState([
    {
      institution: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      degree: 'Master of Science in Computer Science',
      date: 'Aug. 2012 -- Dec. 2013',
      gpa: '4.00',
    },
    {
      institution: 'Birla Institute of Technology and Science',
      location: 'Pilani, India',
      degree: 'Bachelor of Engineering in Electrical and Electronics',
      date: 'Aug. 2008 -- July. 2012',
      gpa: '3.66 (9.15/10.0)',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: 'Google',
      location: 'Mountain View, CA',
      position: 'Software Engineer',
      date: 'Oct 2016 - Present',
      details: [
        {
          title: 'TensorFlow',
          description:
            'TensorFlow is an open-source software library for numerical computation using data flow graphs; primarily used for training deep learning models.',
        },
        {
          title: 'Apache Beam',
          description:
            'Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines, as well as a set of language-specific SDKs for constructing pipelines and runners.',
        },
      ],
    },
    {
      company: 'Coursera',
      location: 'Mountain View, CA',
      position: 'Senior Software Engineer',
      date: 'Jan 2014 - Oct 2016',
      details: [
        {
          title: 'Notifications',
          description:
            'Service for sending email, push and in-app notifications. Involved in delivery time optimization, tracking, and A/B testing.',
        },
        {
          title: 'Workflows',
          description:
            'Developed an open-source workflow framework to create and manage data pipelines using reusable patterns to expedite developer productivity.',
        },
      ],
    },
  ]);
  const [projects, setProjects] = useState([
  
        {
          title: 'TensorFlow',
          description:
            'TensorFlow is an open-source software library for numerical computation using data flow graphs; primarily used for training deep learning models.',
        },
        {
          title: 'Apache Beam',
          description:
            'Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines, as well as a set of language-specific SDKs for constructing pipelines and runners.',
        },
  ]);
  const [skills, setSkills] = useState(
    [{
    
    languages: [
        {
        title: 'Java',
        },
        {
          title: 'Pythoon',
        },
        {
        title: 'Go',
        },
        {
          title: 'C++',
        },
      ],
      technologies: [
        {
          title: 'Aws',
        },
        {
          title: 'Google Cloud',
        },
        {
          title: 'React',
        },
        {
          title: 'Mern',
        },
      ],
    },
   
  ]);

  return (
    <div className="bg-white p-8">
      {/* Header */}
      <Header personalInfo={personalInfo} />

      {/* Education Section */}
      <Section title="Education">
        {education.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </Section>

      {/* Experience Section */}
      <Section title="Experience">
        {experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </Section>

      {/* Experience Section */}
      <Section title="Projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </Section>
      {/* Experience Section */}
      <Section title="Skills">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </Section>

      {/* More sections like Projects, Skills, etc., can follow */}
    </div>
  );
};

// Header Component
const Header: React.FC<{ personalInfo: any }> = ({ personalInfo }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <div>
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <p>Website: <a href={personalInfo.website} className="text-blue-500">{personalInfo.website}</a></p>
        </div>
        
        <div className="text-right">
          <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-500">{personalInfo.email}</a></p>
          <p>Mobile: {personalInfo.mobile}</p>
        </div>
      </div>
    </div>
  );
};

// Section Wrapper
const Section: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 border-b-2 border-black">{title}</h2>
      {children}
    </div>
  );
};

// Education Item Component
const EducationItem: React.FC<{ education: any }> = ({ education }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">{education.institution}</h3>
        <span className="text-sm italic">{education.date}</span>
      </div>
      <div className="flex justify-between">
        <p className="text-sm italic">{education.degree}</p>
        <span className="text-sm">GPA: {education.gpa}</span>
      </div>
    </div>
  );
};

// Experience Item Component
const ExperienceItem: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">{experience.company}</h3>
        <span className="text-sm italic">{experience.date}</span>
      </div>
      <div>
        <p className="text-sm italic">{experience.position}</p>
        <ul className="list-disc ml-5 mt-2">
          {experience.details.map((detail: any, index: number) => (
            <li key={index}>
              <strong>{detail.title}</strong>: {detail.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// Project Item Component
const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="mb-4">
        <ul className="list-disc ml-5 mt-2">
         
            <li>
              <strong>{project?.title}</strong>: {project?.description}
            </li>
        
        </ul>
      </div>
  );
};
// Skill Item Component
const SkillItem: React.FC<{ skill: any }> = ({ skill }) => {
  return (
    <div className="mb-4">
     
      <div>
        <ul className="list-disc ml-5 mt-2">
            <li className='flex justify-between'>
            <div>
            <strong>Languages </strong>: 
            {skill.languages.map((language: any, index: number) => (
            <span className='mx-1' key={index}>
              {language.title}
            </span>
          ))}
            </div>
            <div>

            <strong>Technologies </strong>: 
            {skill.technologies.map((tech: any, index: number) => (
            <span className='mx-1' key={index}>
              {tech.title}
            </span>
          ))}

            </div>

            

            </li>    
          
        </ul>
      </div>
    </div>
  );
};

export default Resume;
