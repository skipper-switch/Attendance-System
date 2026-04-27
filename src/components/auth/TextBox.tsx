import React from "react";

export interface SignupBoxProps {
  title: string;
  description: string;
  variant: string;
}

const TextBox = ({ title, description, variant }: SignupBoxProps) => {
  return (
    <div className={`flex flex-col  max-w-[550px] ${variant}`}>
      <h2 className="font-rubik font-medium text-[24px] md:text-[32px] text-sec-902">
        {title}
      </h2>
      <p className="text-sec-901 font-jakarta text-sm md:text-base font-normal">
        {description}
      </p>
    </div>
  );
};

export default TextBox;
