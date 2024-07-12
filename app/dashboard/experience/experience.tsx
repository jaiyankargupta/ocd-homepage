import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "ABC Inc.",
      duration: "May 2023 - Aug 2023",
      description:
        "Worked on frontend development using React.js and backend with Node.js.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "XYZ Tech",
      duration: "Jan 2022 - Present",
      description:
        "Led development on multiple projects, including a scalable e-commerce platform.",
    },
  ];

  return (
    <main className="text-white flex justify-center mt-5 pl-16 pr-16">
      <div className="w-full max-w-5xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-4">Experience</div>

        <div className="divide-y divide-gray-600">
          {experiences.map((exp) => (
            <div key={exp.id} className="py-4">
              <div className="text-lg font-bold">{exp.title}</div>
              <div className="text-sm text-gray-400">{exp.company}</div>
              <div className="text-sm text-gray-400">{exp.duration}</div>
              <div className="mt-2 text-sm">{exp.description}</div>
            </div>
          ))}
        </div>

        {experiences.length === 0 && (
          <div className="text-center mt-4 text-sm text-gray-400">
            No experience details to display.
          </div>
        )}
      </div>
    </main>
  );
}

export default Experience;
