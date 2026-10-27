
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(`Thank you, ${name}! Your message is ready.`);
    
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Get in Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Contact ElectroHub
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a question about a product or your order?
            Send us a message. We would love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">
              Contact Information
            </h2>

            <p className="mt-3 text-slate-400">
              Reach out to our team for assistance with products
              and orders.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-blue-400">
                  Email
                </h3>
                <p className="mt-1 text-slate-300">
                  support@electrohub.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400">
                  Phone
                </h3>
                <p className="mt-1 text-slate-300">
                  +251 900 000 000
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400">
                  Address
                </h3>
                <p className="mt-1 text-slate-300">
                  Ethiopia
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400">
                  Working Hours
                </h3>
                <p className="mt-1 text-slate-300">
                  Monday – Saturday
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
