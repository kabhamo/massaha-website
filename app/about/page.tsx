import type { Metadata } from "next";
import { AboutView } from "./AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Massaha is an architectural studio founded by three architects from Tel Aviv University. Precision. Warmth. Purpose.",
};

export default function AboutPage() {
  return <AboutView />;
}
