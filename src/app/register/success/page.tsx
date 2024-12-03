"use client"
import React from "react";
import { useRouter } from "next/navigation";

const SuccessPage: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/register/gender");
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center bg-white shadow rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h1>
      <p className="text-gray-600 mb-6">Let's create your diet profile now</p>
      <div className="flex justify-end mt-6">
        <button
          onClick={handleStart}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none hover:outline-indigo-900">
          Start
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
