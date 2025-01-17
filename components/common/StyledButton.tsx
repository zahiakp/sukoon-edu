import React from 'react';

interface StyledButtonProps {
  text: string;
  type?:string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ text ,type}) => {
  return (
    <>
    {!type ? 
    <p className="relative overflow-hidden flex justify-center items-center group">
      <span className="flex">
        {[...text].map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `calc(0.02s * ${index + 1})` }}
            className="-translate-y-14 group-hover:translate-y-0 duration-300"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      <span className="flex absolute">
        {[...text].map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `calc(0.02s * ${index + 1})` }}
            className="group-hover:translate-y-14 translate-y-0 delay-[.15s] duration-300"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </p> :type == "bold" && <p className="relative overflow-hidden flex justify-center items-center group">
      <span className="flex">
        {[...text].map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `calc(0.04s * ${index + 1})` }}
            className="group-hover:font-bold duration-300"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </p>}</>
  );
};

export default StyledButton;
