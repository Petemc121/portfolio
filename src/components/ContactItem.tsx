import React from "react";
import { useInView } from "react-intersection-observer";

interface contactItemInput {
  className: string;
  input: boolean;
  name: string;
  handleChange: (event: any) => void;
  type: string;
}

export default function ContactItem({
  className,
  input,
  name,
  handleChange,
}: contactItemInput) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (input === true) {
    return (
      <input
        ref={ref}
        className={className}
        name={name}
        style={{ animation: inView ? "slideUp 1s forwards" : "none" }}
        onChange={handleChange}
      ></input>
    );
  } else {
    return (
      <textarea
        ref={ref}
        style={{ animation: inView ? "slideUp 1s forwards" : "none" }}
        name={name}
        className={className}
        onChange={handleChange}
      ></textarea>
    );
  }
}
