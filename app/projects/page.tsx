import type { Metadata } from "next";
import { ProjectsView } from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected residential, commercial, interior and concept work by Massaha architecture studio.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
