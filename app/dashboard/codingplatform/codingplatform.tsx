import React from "react";

function Codingplatform({ codeChefRating, codeforcesRating, leetcodeRating }) {
  return (
    <section className="text-white flex justify-center mt-5 pr-16 pl-16">
      <div className="w-full max-w-4xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-4">
          Coding Platform Ratings
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Codechef Rating: 1640</span>
            <span>{codeChefRating}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Codeforces Rating: 1820</span>
            <span>{codeforcesRating}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Leetcode Rating: 1420</span>
            <span>{leetcodeRating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Codingplatform;
