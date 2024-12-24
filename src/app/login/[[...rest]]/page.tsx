'use client'

import { SignIn } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-lg rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-center text-gray-900",
              headerSubtitle: "text-center text-gray-600",
              formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700",
              footerAction: "text-indigo-600 hover:text-indigo-700"
            }
          }}
        />
      </div>
    </div>
  );
}

