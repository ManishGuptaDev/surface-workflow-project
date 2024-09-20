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
  const baseStyles =
    "flex items-center flex-start rounded-[6px] transition duration-200 w-full h-[40px] px-[16px] py-[0] gap-[12px]";

  // Define color styles based on the color prop
  const colorStyles = isDisabled
    ? "bg-[#F1F1F2] text-[#5F6065] cursor-not-allowed" // Styles for disabled state
    : color === "primary"
      ? "bg-[#2F64EE] text-white hover:bg-blue-600"
      : "bg-[#383F50] text-white shadow-[0px_1px_5px_0px_rgba(0,0,0,0.1)]";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${colorStyles}`;

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
