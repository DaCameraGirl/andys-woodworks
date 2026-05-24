export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-stone-900 mb-2">
        Custom Orders & Questions
      </h1>
      <div className="w-16 h-1 bg-amber-400 rounded mb-10" />

      <p className="text-stone-600 mb-8 leading-relaxed">
        Have a specific piece in mind? Want to check on availability? Andy reads
        every message and typically responds within 24–48 hours.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-5"
      >
        {/* Formspree will send submissions to this address */}
        <input type="hidden" name="_replyto" value="andy_burch2000@yahoo.com" />
        <input type="hidden" name="_subject" value="New message from Andy's Woodworks website" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
          >
            <option>Custom order inquiry</option>
            <option>Question about an existing item</option>
            <option>Order status</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
            placeholder="Tell Andy what you have in mind — dimensions, wood type, timeline, whatever's helpful."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-stone-900 text-white font-bold py-3.5 rounded-xl hover:bg-amber-600 transition-colors text-sm uppercase tracking-wide"
        >
          Send Message
        </button>
      </form>

      <p className="text-xs text-stone-400 mt-4 text-center">
        Form powered by Formspree — free for low volume.{" "}
        <a
          href="https://formspree.io"
          className="hover:text-amber-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up at formspree.io
        </a>{" "}
        and replace <code>YOUR_FORM_ID</code> in this file.
      </p>
    </div>
  );
}
