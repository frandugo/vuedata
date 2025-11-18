'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Contact us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Any query about our services, solutions or opening? Use the following form to let us know.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>

              <p className="text-sm text-gray-400">
                We're committed to your privacy. VueData uses the information you provide to contact you about relevant content and services.
              </p>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Office locations
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  United States
                </h4>
                <p className="text-gray-300 text-sm">
                  123 Business Street, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  India
                </h4>
                <p className="text-gray-300 text-sm">
                  Tech Park, Building A<br />
                  Bangalore, Karnataka 560001
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  United Kingdom
                </h4>
                <p className="text-gray-300 text-sm">
                  10 Business Avenue<br />
                  London, UK EC1A 1BB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
