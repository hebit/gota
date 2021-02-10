import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Gota.module.css";
import { animated, interpolate, useSpring } from "react-spring";
import { getSlugFromRouter, SectionSlug } from "../../utils/section-slugs";
import { useRouter } from "next/router";
// import { easings } from 'd3-ease'

function selectMessage(slug: SectionSlug, setDimiss: (value: boolean) => void) {
  if (slug === SectionSlug.PROJECTS) {
    return (
      <>
        <p>Wow, achou legal? Bora saber mais sobre hebit?</p>
        <div>
          <Link href={`/?section=${SectionSlug.ABOUT}`}>
            <span className={styles.btnMain}>Bora!</span>
          </Link>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=557187995477&text=Oi,%20encontrei%20este%20contato%20no%20seu%20portf%C3%B3lio!"
          >
            <span className={styles.btnMain}>
              <img className={styles.wppIcon} src="./wpp.svg" />
            </span>
          </a>

          <a onClick={() => setDimiss(true)}>Não, valeu</a>
        </div>
      </>
    );
  }
  return (
    <>
      <p>
        Oi! O Hebit é meu mestre, então vou te ajudar a conhecer ele. O que acha
        de ver alguns projetos dele?
      </p>
      <div>
        <Link href={`/?section=${SectionSlug.PROJECTS}`}>
          <span className={styles.btnMain}>Bora!</span>
        </Link>
        <a onClick={() => setDimiss(true)}>Não, valeu</a>
      </div>
    </>
  );
}

const GotaArea: React.FC = () => {
  const [dimiss, setDimiss] = useState(false);
  const containerProps = useSpring({
    from: {
      width: "100%",
    },
    to: {
      width: "50%",
    },
    delay: 3000,
  });
  const gotaContainerProps = useSpring({
    from: {
      left: "50%",
    },
    to: {
      left: "100%",
    },
    delay: 3000,
  });

  const buildingProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 3000,
  });

  const chatProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 3800,
  });
  const router = useRouter();
  const slug = getSlugFromRouter(router);

  return (
    <animated.div className={styles.container} style={containerProps}>
      {/* <div></div> */}
      <animated.div className={styles.gotaContainer} style={gotaContainerProps}>
        <animated.div style={chatProps} className={styles.gotaChatContainer}>
          {!dimiss ? (
            selectMessage(slug, setDimiss)
          ) : (
            <p>
              Ok! Qualquer coisa pode falar com meu mestre pelo e-email
              hebit.cake@gmail.com
            </p>
          )}
        </animated.div>
        <img className={styles.gotaImg} src="./gota.svg" />
      </animated.div>
      <animated.img
        className={styles.buildingImg}
        style={buildingProps}
        src="./test.svg"
      />
    </animated.div>
  );
};

export default GotaArea;
