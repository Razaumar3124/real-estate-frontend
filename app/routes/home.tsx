import Section1 from "~/components/Home_section_comps/section1";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Real-estate" },
    { name: "description", content: "Welcome to Home Page!" },
  ];
}

export default function Home() {
  return (
    <>
      <Section1 />
      <Section1 />
      <Section1 />
    </>
  );
}
