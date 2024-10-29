'use client'

import { useState } from "react";
import emailjs from "@emailjs/browser";

const notification = 'Thank you for reaching out! We appreciate your interest in our IT services. Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.';

export default function ContactForm({ children, submitBtnText }) {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, e.target, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      });

      setMsg(notification);
      console.log('Email sent');
      setEmailSent(true);
    } catch (err) {
      console.log(err);
      setMsg('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  }

  if (emailSent) return (
    <p className="max-sm:text-sm">
      {notification}
    </p>
  )

  return (
    <form onSubmit={handleSubmit}>
      {children}

      <div className="justify-between items-center flex gap-4 max-sm:flex-col mt-12">
        <button disabled={loading} className="bg-primary disabled:opacity-60 text-white rounded-full text-sm font-semibold py-3 px-6 block max-md:ml-auto">
          {loading ? 'Submitting...' : submitBtnText}
        </button>

        {msg &&
          <p>
            {msg}
          </p>
        }
      </div>
    </form>
  );
}
