import React from 'react';

const ErrorInstructionsList = () => {
  const instructions = [
    "Recheck the code snippet to ensure it’s correctly placed before the closing </head> tag.",
    "Ensure there are no blockers (like ad blockers) preventing the script from running.",
    "Try again once you’ve made the corrections."
  ];

  return (
    <ul className="list-disc pl-5 text-[12px] font-normal leading-[17px] tracking-[-0.006em] text-left text-[#656565]">
      {instructions.map((instruction, index) => (
        <li key={index}>
          {instruction}
        </li>
      ))}
    </ul>
  );
};

export default ErrorInstructionsList;