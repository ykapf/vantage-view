import Button from "./Button";

export default function ContactBand() {
  return (
    <section className="wrap bg-teal py-section">
      <h2 className="display text-jumbo">Got a site to show?</h2>
      <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[44ch] text-xl font-medium">
          Tell us where it is and what you need to see. We will suggest a simple plan that suits the project.
        </p>
        <Button href="/contact">Request a quote</Button>
      </div>
    </section>
  );
}
