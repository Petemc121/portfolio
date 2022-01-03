import React from "react";
import { useInView } from "react-intersection-observer";

interface skillLogoInput {
  src: string;
  delay: string;
}

export default function SkillLogo({ src, delay }: skillLogoInput) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <img
      ref={ref}
      style={{ animation: inView ? "slideUp 1s forwards " + delay : "none" }}
      className="skillLogos"
      src={src}
    />
  );
}
