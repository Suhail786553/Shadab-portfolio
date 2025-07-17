import React from "react";

const TalksAndResearch = () => {
  return (
    <div id="talks-research" className="relative z-50 my-16 lg:my-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 relative flex items-center">
        <div className="w-20 h-20 bg-voile-100 rounded-full absolute -top-3 left-0 blur-3xl opacity-30"></div>
        <h2 className="text-white text-2xl sm:text-3xl font-bold z-10 bg-[#1a1443] px-6 py-3 rounded-md shadow-md">
          Talks / Workshops & Research Papers
        </h2>
        <div className="flex-1 h-[2px] bg-[#1a1443] ml-4"></div>
      </div>

      {/* Talks and Workshops */}
      <div className="mb-12 bg-gradient-to-tr from-[#16f2b3]/10 via-[#7c3aed]/10 to-[#1a1443]/10 rounded-xl border border-[#1a1443] p-6 sm:p-8 shadow-lg backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-violet-300 mb-4">Talks & Workshops Delivered</h3>
        <ul className="space-y-4 list-disc list-inside text-white text-sm sm:text-base leading-relaxed max-h-[400px] overflow-y-auto pr-2">
          {talksData.map((talk, index) => (
            <li key={index} className="marker:text-violet-400">{talk}</li>
          ))}
        </ul>
      </div>

      {/* Research Papers */}
      <div className="bg-gradient-to-tr from-[#16f2b3]/10 via-[#7c3aed]/10 to-[#1a1443]/10 rounded-xl border border-[#1a1443] p-6 sm:p-8 shadow-lg backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-violet-300 mb-4">Research Papers</h3>
        <ul className="space-y-4 list-disc list-inside text-white text-sm sm:text-base leading-relaxed max-h-[400px] overflow-y-auto pr-2">
          {researchData.map((paper, index) => (
            <li key={index} className="marker:text-violet-400">{paper}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TalksAndResearch;

// Example data structure (in a separate file or above the component)
export const talksData = [
  "Delivering a talk titled “Qubits to Cures: Quantum ML for Cancer Detection” at Ai4 Conference in Vegas in Aug 2025",
  "Delivered a talk titled “Post Quantum Cryptography, AI-Based Attacks...” at Quantum Revolution in Feb 2025",
  "Delivered a TEDx talk at IIIT Kottayam in Jan 2025",
  "Delivered a talk on GenAI on VertexAI at GDG New York in 2024",
  "Delivered MLOps on Azure training at Confidential 2024",
  "Equality, Diversity, and Inclusion (EDI) Panel at University of Bristol 2021",
  // ...add more items or paginate
];

export const researchData = [
  "Quantum Transfer Learning for Breast Cancer Detection, 2025, ICCSAI",
  "A Hybrid Classical-Quantum Model for Enhanced MRI Brain Tumor Classification, 2025, ICCSAI",
  "Hybrid Machine Learning for Feature-Based Spam Detection, 2025, ICCICTN",
  "Simulation and Analysis of ML-Based Chronic Kidney Disease Prediction, 2025, ICAECT",
  "Application of Neural Networks in Bite Marks Identification, 2022",
  "Novel DL Architecture for Heart Disease Prediction using CNN, 2021",
  "Assessment of Interpolation Methods for Solving Real-Life Problems, 2014",
];
