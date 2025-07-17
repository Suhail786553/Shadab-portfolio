import { achievementsData } from '@/utils/data/achievements-data';

const Achievements = () => {
  return (
    <div id="achievements" className="relative z-50 my-16 lg:my-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 relative flex items-center">
        <div className="w-20 h-20 bg-voile-100
 rounded-full absolute -top-3 left-0 blur-3xl opacity-30"></div>
        <h2 className="text-white text-2xl sm:text-3xl font-bold z-10 bg-[#1a1443] px-6 py-3 rounded-md shadow-md">
          Achievements
        </h2>
        <div className="flex-1 h-[2px] bg-[#1a1443] ml-4"></div>
      </div>

      {/* Achievements List */}
      <div className="bg-gradient-to-tr from-[#16f2b3]/10 via-[#7c3aed]/10 to-[#1a1443]/10 rounded-xl border border-[#1a1443] p-6 sm:p-8 shadow-lg backdrop-blur-sm">
        <ul className="space-y-5 list-disc list-inside text-white text-sm sm:text-base leading-relaxed">
          {achievementsData.map((item, index) => (
            <li key={index} className="marker:text-violet-400">
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
