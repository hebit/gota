import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { SectionSlug } from "../../utils/section-slugs";
import { About, Projects, Tech } from "./content";
import styles from "./Sections.module.css";

const sections = {
  [SectionSlug.PROJECTS]: <Projects />,
  [SectionSlug.ABOUT]: <About />,
  [SectionSlug.TECH]: <Tech />,
} as Record<SectionSlug, JSX.Element>;

const Sections: React.FC = () => {
  const router = useRouter();
  const query = router.query;
  const queryEntries = Object.entries(query);

  const [prevSection, setPrevSection] = useState<JSX.Element | null>(null);
  const [currentSection, setCurrentSection] = useState<JSX.Element | null>(
    null
  );

  const [prevProps, setPrevProps] = useSpring(() => ({
    opacity: 1,
    height: "100vh",
  }));

  useEffect(() => {
    const sectionSlug = query.section as SectionSlug;
    if (sectionSlug) {
      console.log("queryEntries:", query);
      console.log({ newPrev: currentSection });
      setPrevSection(currentSection);
      console.log({ newCurr: sections[sectionSlug] });
      setCurrentSection(sections[sectionSlug]);
    }
  }, [router]);

  useEffect(() => {
    if (prevSection) {
      setPrevProps({
        opacity: 0,
        height: "0vh",
      });
      const timeOut = setTimeout(() => setPrevSection(null), 500);
      return () => clearTimeout(timeOut);
    } else {
      setPrevProps({
        opacity: 1,
        height: "100vh",
      });
    }
  }, [prevSection]);

  if (queryEntries.length === 0) {
    return <div />;
  }

  return (
    <div
      className={styles.container}
      style={{
        overflowY: prevSection ? "hidden" : "auto",
      }}
    >
      {prevSection && (
        <animated.div style={prevProps}>{prevSection}</animated.div>
      )}
      {currentSection}
    </div>
  );
};

export default Sections;
