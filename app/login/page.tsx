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
    <main className="h-full w-full flex justify-center items-center">
      <div className="mt-32  py-8 px-6 backdrop:blur-md flex w-2/3 flex-col border rounded-lg">
        <div className=" text-white text-4xl font-bold mb-2">Login</div>
        <div className=" text-white text-2xl font-bold mb-6">
          Login with college Domain Id
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
