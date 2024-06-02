import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gbx88l7', 'template_rku1tl8', form.current, {
        publicKey: 'nTjuwGexUJsHZDT0g',
      })
      .then(
        (response) => {
          setIsModalOpen(true);
          form.current.reset();
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
        },
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="container flex flex-wrap px-5 py-10 mx-auto sm:flex-nowrap">
        {/* Contact information */}
        <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=HBR%20Layout,%20Bangalore,%20Karnataka,India+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
            <div className="px-6 lg:w-2/2">
              <h2 className="text-xs font-semibold tracking-widest text-yellow-300 title-font">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                HBR Layout <br />
                Bangalore, Karnataka
              </p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-yellow-300 title-font">
                EMAIL
              </h2>
              <a className="leading-relaxed text-indigo-400" href="mailto:Sanjayconnecting007@email.com">
                Sanjayconnecting007@email.com
              </a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-yellow-300 title-font">
                PHONE
              </h2>
              <a href="tel:+917338514739" className="leading-relaxed text-white">+91 7338514739</a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-yellow-300 title-font">
                LINKEDIN
              </h2>
              <a className="leading-relaxed text-indigo-400" href="https://www.linkedin.com/in/sanjay-kumar-9639a6257" target="_blank" rel="noopener noreferrer">
                My LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} name="contact" className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <h2 className="mb-1 text-3xl font-medium text-white sm:text-4xl title-font">
            Hire Me
          </h2>
          <p className="mb-5 leading-relaxed text-white">
            As a fresh and passionate graduate, I am eager to contribute my
            skills and enthusiasm to a dynamic team. Let's connect and explore
            how I can bring a fresh perspective to your projects.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
    <div className="relative w-auto max-w-md p-6 mx-auto my-8 bg-white border border-gray-300 rounded-md shadow-lg">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-900">Message sent successfully!</p>
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
