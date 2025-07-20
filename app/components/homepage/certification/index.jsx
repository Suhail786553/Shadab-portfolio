'use client';

import React from 'react';

const certifications = [
  {
    title: 'Essentials of Entrepreneurship',
    provider: 'Stanford Online',
    year: '2024',
  },
  {
    title: 'Achieving Innovation through Inspiration',
    provider: 'Stanford Online',
    year: '2024',
  },
  {
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft & LinkedIn',
    year: '',
  },
  {
    title: 'Generative AI Fundamentals',
    provider: 'Databricks',
    year: '',
  },
  {
    title: 'AWS Certified Machine Learning - Specialty (MLS)',
    provider: 'Amazon',
    year: '11/2022 - 11/2025',
  },
  {
    title: 'Google Cloud Certified ML Engineer',
    provider: 'Google Cloud',
    year: '12/2022 - 12/2024',
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    year: '',
  },
  {
    title: 'Product Management Mentorship',
    provider: 'GrowthSchool',
    year: '',
  },
  {
    title: 'Insurjo Product Management',
    provider: 'The Product Folks',
    year: '',
  },
];

export default function Certifications() {
  return (
    <section className="my-10">
  <h2 className="text-2xl font-bold mb-6 text-white">🎓 Certifications</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="bg-gradient-to-tr from-[#16f2b3]/10 via-[#7c3aed]/10 to-[#1a1443]/10 border border-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
        <p className="text-sm text-gray-300">{cert.provider}</p>
        {cert.year && (
          <p className="text-xs text-gray-400 mt-1 italic">{cert.year}</p>
        )}
      </div>
    ))}
  </div>
</section>

  );
}
