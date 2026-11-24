import Link from "next/link";

const styles = {
  ink: "bg-ink text-paper hover:bg-teal-deep",
  signal: "bg-signal text-ink hover:bg-paper",
};

export default function Button({
  href,
  children,
  tone = "ink",
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof styles;
}) {
  return (
    <Link
      href={href}
      className={`inline-block px-7 py-4 text-lg font-semibold transition-colors ${styles[tone]}`}
    >
      {children}
    </Link>
  );
}
