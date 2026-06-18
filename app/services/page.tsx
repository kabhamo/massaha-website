import type { Metadata } from "next";
import { ServicesView } from "./ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural consulting, interior space planning, renovation guidance, 3D visualization, permits and concept design.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
