import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        // IMPORTANT:  This should match your Next.js API route file name (e.g., /pages/api/contact.js)
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
        setSubmitSuccess(true);
        console.log("Email sent successfully");
      } else {
        const errorData = await response.json();
        setSubmitError(
          errorData.message || "Failed to send email. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        "An unexpected error occurred. Please check your network connection."
      );
      console.error("Error sending message", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-primary text-textPrimary"
    >
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">
                Get in Touch
              </h3>
              <p className="text-textSecondary">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-secondary text-xl" />
                  <span>tedlamillionyou@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-secondary text-xl" />
                  <span>+251 939 847 277</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                  <span>Addis Ababa,Ethiopia</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
