import type { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Massaha studio. Tell us about your project.",
};

export default function ContactPage() {
  return <ContactView />;
}
