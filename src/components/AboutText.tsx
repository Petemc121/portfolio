import React from "react";
import { useInView } from "react-intersection-observer";

interface aboutTextInput {
  text: string;
  textClass: string;
}

export default function AboutText({ text, textClass }: aboutTextInput) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={inView ? textClass + " slideIn" : textClass}>
      {text}
    </div>
  );
}
