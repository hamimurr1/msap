import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800">
          Contact Us
        </h2>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered w-full"
          ></textarea>

          <button className="btn btn-primary w-full rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;