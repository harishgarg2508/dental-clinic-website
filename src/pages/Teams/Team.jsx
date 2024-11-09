// Team.js
import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. John Doe',
      role: 'Chief Dentist',
      image: 'assets/john.jpg',
      description: 'Dr. John is an experienced dentist who specializes in restorative dentistry.',
    },
    {
      name: 'Dr. Jane Smith',
      role: 'Orthodontist',
      image: 'assets/sarah.jpg',
      description: 'Dr. Jane is an orthodontist with over 10 years of experience in braces and Invisalign treatments.',
    },
    {
      name: 'Dr. Emily Brown',
      role: 'Periodontist',
      image: 'assets/emily.jpg',
      description: 'Dr. Emily is passionate about gum health and specializes in periodontal treatments.',
    },
  ];

  return (
    <div className="team">
      
      <h2>Meet Our Team</h2>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
