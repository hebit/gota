import React from "react";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { SectionSlug } from "../../utils/section-slugs";
// import { Container } from './styles';

const NavBar: React.FC = () => {
  const router = useRouter();

  const items = [
    {
      label: "Projetos",
      url: SectionSlug.PROJECTS,
    },
    {
      label: "Sobre Hebit",
      url: SectionSlug.ABOUT,
    },
    {
      label: "Tecnologias",
      url: SectionSlug.TECH,
    },
    {
      label: "Curiosidades",
      url: SectionSlug.FUNFACTS,
    },
  ];
  return (
    <div className={styles.container}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/?section=${item.url}`}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
