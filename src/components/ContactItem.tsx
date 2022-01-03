import React from "react";
import { useInView } from "react-intersection-observer";

interface contactItemInput {
  className: string;
  input: boolean;
}

export default function ContactItem({ className, input }: contactItemInput) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (input === true) {
    return (
      <input
        ref={ref}
        className={className}
        style={{ animation: inView ? "slideUp 1s forwards" : "none" }}
      ></input>
    );
  } else {
    return (
      <textarea
        ref={ref}
        style={{ animation: inView ? "slideUp 1s forwards" : "none" }}
        className={className}
      ></textarea>
    );
  }
}
