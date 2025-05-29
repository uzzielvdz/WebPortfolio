import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="max-w-2xl mx-auto px-4 py-8 mt-16 w-full flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h1>
        <p className="text-gray-700 mb-8">
          If you have any questions, project proposals, or would simply like to get in touch, feel free to contact me using the form below or through my social media channels. i'm always open to new ideas and meaningful connections.
        </p>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>

          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Send
            </button>
          </div>
        </form>

      </section>
      <Footer />
    </main>
  );
} 