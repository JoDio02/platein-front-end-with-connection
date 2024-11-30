"use client";
import React from "react";

type LabeledInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LabeledInput({
  label,
  id,
  placeholder = "",
  type = "text",
  value = "",
  onChange,
}: LabeledInputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete="none"
        required
        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
