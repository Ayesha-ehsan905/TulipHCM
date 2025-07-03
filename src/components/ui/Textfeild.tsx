"use client";
import React, { useState } from "react";

interface CustomPlaceholderInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const Textfeild: React.FC<CustomPlaceholderInputProps> = ({
  label,
  required = false,
  className = "",
  ...props
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const showPlaceholder = !focused && value === "";

  return (
    <div className="relative w-full">
      <input
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        placeholder={`${label}${required ? "*" : ""}`} // fallback for accessibility
        className={`w-full px-3 py-2 bg-white rounded-[80px] text-black placeholder-transparent focus-visible:outline-none ${className}`}
      />

      {showPlaceholder && (
        <span className="absolute left-4 top-2.5 text-base pointer-events-none">
          <span className="">{label}</span>
          <span className="text-error">*</span>
        </span>
      )}
    </div>
  );
};

export default Textfeild;
