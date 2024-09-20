"use client";

import React from "react";

interface ButtonProps {
  color?: "primary" | "secondary";
  icon?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode; // Text or content inside the button
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  icon,
  isDisabled = false,
  onClick,
  children,
}) => {
  // Define base styles
  const baseStyles = 'flex items-center flex-start px-4 py-0 rounded-[6px] border transition duration-200 w-full';

  // Define color styles based on the color prop
  const colorStyles =
    color === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-[#383F50] text-white border border-[#F0F0F0] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.1)]";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${colorStyles} ${isDisabled ? "opacity-0 cursor-not-allowed" : ""} w-[241px] h-[40px] px-[16px] py-[0] gap-[12px]`;

  return (
    <button
      className={buttonStyles}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
