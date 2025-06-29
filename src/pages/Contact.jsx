export default function Contact() {
    return (
      <section className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded focus:outline-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-green-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-2 rounded focus:outline-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Send
          </button>
        </form>
      </section>
    );
  }