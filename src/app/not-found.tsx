import Button from "./components/standard/Button";

export default function NotFound() {
  return (
    <section className="wrap py-section">
      <h1 className="display text-jumbo">Off the map</h1>
      <p className="my-8 text-xl">There is no page at this address.</p>
      <Button href="/">Go to the home page</Button>
    </section>
  );
}
