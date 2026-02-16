import Section1 from "~/components/Home_section_comps/section1";
import type { Route } from "./+types/home";
import Section2 from "~/components/Home_section_comps/section2";
import Section3 from "~/components/Home_section_comps/section3";
import { Box } from "@mui/material";

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
      <Section2 />
      <Section3 />
      <Box sx={{height: "100vh"}}></Box>
    </>
  );
}
