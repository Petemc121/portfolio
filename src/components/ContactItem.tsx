import React from "react";
import { useInView } from "react-intersection-observer";

interface contactItemInput {
  className: string;
  input: boolean;
  name: string;
  handleChange: (event: any) => void;
  type: string;
  value: string | undefined;
}

export default function ContactItem({
  className,
  input,
  name,
  handleChange,
  value,
}: contactItemInput) {
  const { ref, inView } = useInView({ triggerOnce: true });
  console.log(value);
  if (input === true) {
    return (
      <input
        ref={ref}
        className={className}
        name={name}
        style={{ animation: inView ? "slideUp 1s forwards" : "none" }}
        onChange={handleChange}
        value={value === null ? "" : value}
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
        value={value === null ? "" : value}
      ></textarea>
    );
  }
}
