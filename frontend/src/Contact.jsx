import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would add email sending logic or API call
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        Feel free to reach out via the form below or email me directly at
        <a href="mailto:singhsiddhart641@gmail.com" className="text-blue-600 underline ml-1">singhsiddhart641@gmail.com</a>
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-blue-50 rounded-lg shadow p-8 text-left">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {submitted && (
          <p className="mt-4 text-green-600 font-semibold">Thank you for reaching out! I'll get back to you soon.</p>
        )}
      </form>
    </section>
  );
}

export default Contact; 