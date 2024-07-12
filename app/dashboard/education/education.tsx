import React from "react";

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "National Institute of Technology Kurukshetra",
      duration: "Expected May 2026",
      description:
        "Relevant coursework in Data Structures and Algorithms, Python, Artificial Intelligence, Web Technologies, IoT, MySQL, DBMS, Google Cloud, Computer Network, Operating System, Software Engineering, COA, DSD, Linux, CP",
    },
  ];

  return (
    <main className="text-white flex justify-center mt-5 pl-16 pr-16">
      <div className="w-full max-w-5xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-4">Education</div>

        <div className="divide-y divide-gray-600">
          {education.map((edu) => (
            <div key={edu.id} className="py-4">
              <div className="text-lg font-bold">{edu.degree}</div>
              <div className="text-sm text-gray-400">{edu.institution}</div>
              <div className="text-sm text-gray-400">{edu.duration}</div>
              <div className="mt-2 text-sm">{edu.description}</div>
            </div>
          ))}
        </div>

        {education.length === 0 && (
          <div className="text-center mt-4 text-sm text-gray-400">
            No education details to display.
          </div>
        )}
      </div>
    </main>
  );
}

export default Education;
