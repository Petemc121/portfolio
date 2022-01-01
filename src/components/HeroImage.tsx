import React from "react";
import hero from "../images/hero.png";
import { useState, useEffect } from "react";

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);
  const [introLoaded, setIntroLoaded] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [frag1Loaded, setFrag1Loaded] = useState(false);
  const [frag2Loaded, setFrag2Loaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1400);
    setTimeout(() => {
      setIntroLoaded(true);
    }, 2500);
    setTimeout(() => {
      setNameLoaded(true);
    }, 4200);
    setTimeout(() => {
      setFrag1Loaded(true);
    }, 5100);
    setTimeout(() => {
      setFrag2Loaded(true);
    }, 7100);
  }, [setLoaded]);

  return (
    <div style={{ backgroundImage: `url(${hero})` }} className="heroImage">
      <div className="heroFade">
        <div className="heroTextContainer">
          <div
            className={
              loaded
                ? "heroText animatedHeroIntro heroIntro"
                : "heroText initHeroText heroIntro"
            }
          >
            Hi, my name is
          </div>
          <h1
            className={
              introLoaded
                ? "heroText animatedHeroTitle heroTitle"
                : "heroText initHeroText heroTitle"
            }
          >
            Peter McNulty
          </h1>
          <h2
            className={
              nameLoaded
                ? "heroText animatedHeroCaption heroCaption"
                : "heroText initHeroText heroCaption"
            }
          >
            I build dynamic, interactive websites and web-apps.
          </h2>
          <h2
            className={
              nameLoaded
                ? "heroText animatedHeroCaptionFrag1 heroCaptionFrag1"
                : "heroText initHeroText heroCaptionFrag1"
            }
          >
            I build dynamic,
          </h2>
          <h2
            className={
              frag1Loaded
                ? "heroText animatedHeroCaptionFrag2 heroCaptionFrag2"
                : "heroText initHeroText heroCaptionFrag2"
            }
          >
            interactive websites and web-apps.
          </h2>
          <button
            style={{ opacity: frag2Loaded ? "1" : "0" }}
            className="primaryButton"
          >
            My work
          </button>
        </div>
      </div>
    </div>
  );
}
