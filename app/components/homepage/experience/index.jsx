// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
  <Image
    src="/section.svg"
    alt="Hero"
    width={1572}
    height={795}
    className="absolute top-0 -z-10"
  />

  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
        Experiences
      </span>
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    </div>
  </div>

  <div className="py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Left side Lottie */}
      <div className="flex justify-center items-start">
        <div className="w-full h-full">
          <AnimationLottie animationPath={experience} />
        </div>
      </div>

      {/* Right side Cards */}
      <div className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Column 1: First 3 cards */}
    <div className="flex flex-col gap-6">
      {experiences.slice(0, 3).map((experience) => (
        <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
          <div className="p-4 h-full min-h-[180px] relative flex flex-col justify-between">
            <Image
              src="/blur-23.svg"
              alt="Hero"
              width={1080}
              height={100}
              className="absolute bottom-0 opacity-70"
            />
            <div className="flex justify-center mb-2">
              <p className="text-xs text-[#16f2b3]">{experience.duration}</p>
            </div>
            <div className="flex items-center gap-x-4 px-3 py-3">
              <div className="text-violet-500 transition-all duration-300 hover:scale-110">
                <BsPersonWorkspace size={28} />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold uppercase">
                  {experience.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  {experience.company}
                </p>
              </div>
            </div>
          </div>
        </GlowCard>
      ))}
    </div>

    {/* Column 2: Next 3 cards */}
    <div className="flex flex-col gap-6">
      {experiences.slice(3, 6).map((experience) => (
        <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
          <div className="p-4 h-full min-h-[180px] relative flex flex-col justify-between">
            <Image
              src="/blur-23.svg"
              alt="Hero"
              width={1080}
              height={100}
              className="absolute bottom-0 opacity-70"
            />
            <div className="flex justify-center mb-2">
              <p className="text-xs text-[#16f2b3]">{experience.duration}</p>
            </div>
            <div className="flex items-center gap-x-4 px-3 py-3">
              <div className="text-violet-500 transition-all duration-300 hover:scale-110">
                <BsPersonWorkspace size={28} />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold uppercase">
                  {experience.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  {experience.company}
                </p>
              </div>
            </div>
          </div>
        </GlowCard>
      ))}
    </div>
  </div>
</div>

    </div>
  </div>
</div>

  );
};

export default Experience;