import React from "react";


// Example frontend technologies (replace or extend as needed)
const frontendTechs = [
  { name: "React", icon: "⚛️", color: "from-blue-50 to-blue-100" },
  { name: "Vue.js", icon: "🟢", color: "from-green-50 to-green-100" },
  { name: "Next.js", icon: "⬛", color: "from-gray-50 to-gray-100" },
  { name: "TypeScript", icon: "🌀", color: "from-blue-50 to-blue-100" },
  { name: "HTML5", icon: "🟥", color: "from-orange-50 to-orange-100" },
  { name: "CSS3", icon: "🟦", color: "from-blue-50 to-blue-100" },
  { name: "Tailwind CSS", icon: "💨", color: "from-cyan-50 to-cyan-100" },
  { name: "Bootstrap", icon: "🟪", color: "from-purple-50 to-purple-100" },
  { name: "Sass", icon: "🎨", color: "from-pink-50 to-pink-100" },
  { name: "Angular", icon: "🅰️", color: "from-red-50 to-red-100" },
  { name: "jQuery", icon: "💎", color: "from-sky-50 to-sky-100" },
  { name: "Gatsby", icon: "🌐", color: "from-violet-50 to-violet-100" },
  { name: "Ember.js", icon: "🔥", color: "from-orange-50 to-orange-100" },
];

const TechStacks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl mb-10">Our Tech Stacks</h2>
        <p className="text-gray-600 mb-14 max-w-2xl">
          We use modern frameworks, languages, and tools to build scalable,
          maintainable, and visually polished products.
        </p>

        {/* === Frontend Development Section === */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
            {frontendTechs.map((tech, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-b ${tech.color} hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full h-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] min-h-[180px] flex flex-col items-center justify-center p-6`}
              >
                <div className="mb-4 text-4xl flex justify-center">
                  {tech.icon}
                </div>
                <p className="text-gray-800 font-medium text-sm md:text-base text-center">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;