import type { Metadata } from "next";
import ContactForm from "../components/client/ContactForm";
import { ADDRESS, EMAIL } from "../config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for construction, property or drone media in Hampshire.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="wrap bg-teal pb-section pt-[6vh]">
      <h1 className="display text-mega">Contact</h1>
      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-3 text-xl font-medium">
          <p className="max-w-[30ch]">Tell us where the site is and what you need to see.</p>
          <p>
            <a href={`mailto:${EMAIL}`} className="break-all underline underline-offset-4">
              {EMAIL}
            </a>
          </p>
          <p>{ADDRESS}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
