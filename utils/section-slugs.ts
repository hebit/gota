import { NextRouter } from "next/router";

export enum SectionSlug {
  PROJECTS = "projects",
  ABOUT = "about",
  TECH = "tech",
  FUNFACTS = "funfacts",
}

export function getSlugFromRouter(router: NextRouter) {
  const slug = router.query.section;
  return slug as SectionSlug;
}
