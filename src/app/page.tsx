
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [requirements, setRequirements] = useState("");
  const router = useRouter();

  const handleNavigate = () => {

      router.push('/grid'); // navigate to /grid
  };

  const creditsStr = localStorage.getItem("credits");
  if (!creditsStr) {
    console.log(20)
  } else {
    console.log(creditsStr)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequirements(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Paste Your Software Requirements
        </h1>

        <textarea
          value={requirements}
          onChange={handleInputChange}
          placeholder="Enter software requirements here..."
          className="w-full h-60 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-base"
        />
        <button
              className="mt-8 text-[#cccccc] font-inherit text-[1.1rem] bg-[#1e1e24] w-40 h-20"
              onClick={handleNavigate}
          >
          <b>START</b>
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Your text will be processed to extract structured requirements.
        </p>
      </div>
    </div>
  );
}