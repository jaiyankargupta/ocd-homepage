"use client";

import { useEffect, useState } from "react";

const loginPage = () => {
  const [emailSumbitted, setEmailSumbitted] = useState(false);

  useEffect(() => {
    if (emailSumbitted) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <main className=" mb-14 h-full w-full flex justify-center items-center">
      <div className="mt-32 py-8 px-6 backdrop:blur-lg flex w-2/3 flex-col border rounded-lg bg-gradient-to-b from-transparent via-purple-900 to-transparent bg-opacity-30 shadow-inner">
        <div className="text-white text-4xl mb-2">Authenticate Yourself</div>
        <div className="text-white text-2xl mb-6">
          Provide your college ID and we'll Authenticate you
        </div>
        <form className="flex flex-col gap-4 z-20">
          <input
            type="text"
            placeholder="122122@nitkkr.ac.in"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className=" button-primary px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default loginPage;
