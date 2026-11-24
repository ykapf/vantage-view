"use client";
import { useState } from "react";
import { LISTED } from "../../config/services";
import { EMAIL } from "../../config/site";

const field = "mt-2 block w-full border-2 border-ink bg-white px-4 py-3 text-lg";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <p role="status" className="display text-large">
        Thanks. Your enquiry has been sent.
      </p>
    );

  return (
    <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
      <label className="font-semibold">
        First name
        <input name="firstName" required maxLength={100} autoComplete="given-name" className={field} />
      </label>
      <label className="font-semibold">
        Last name
        <input name="lastName" required maxLength={100} autoComplete="family-name" className={field} />
      </label>
      <label className="font-semibold">
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </label>
      <label className="font-semibold">
        Service
        <select name="subject" className={field} defaultValue="General enquiry">
          <option>General enquiry</option>
          {LISTED.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
        </select>
      </label>
      <label className="font-semibold sm:col-span-2">
        About the project
        <textarea name="message" required rows={6} maxLength={5000} className={field} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="sm:col-span-2">
        <button
          disabled={state === "sending"}
          className="bg-ink px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-teal-deep disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {state === "error" && (
          <p role="alert" className="mt-4 font-medium">
            Your enquiry was not sent. Please try again, or email{" "}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
