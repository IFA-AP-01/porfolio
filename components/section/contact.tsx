"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../submit-btn";
import toast from "react-hot-toast";
import { BsDiscord } from "react-icons/bs";
import { FaGithubSquare, FaPhone } from "react-icons/fa";
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { executeRecaptcha } = useGoogleReCaptcha();
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-16 sm:mb-18 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading highlight="Touch">Get in Touch</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact us directly at{" "}
        <a
          className="font-bold text-primary dark:text-primary/80 hover:underline"
          href="mailto:ifa.mobileteam@gmail.com"
        >
          ifa.mobileteam@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Social Links */}
      <motion.div
        className="flex flex-row items-center justify-center gap-3 text-lg font-medium mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-blue-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="https://discord.gg/MdtF7raJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join us on Discord"
        >
          <BsDiscord className="text-xl" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-blue-600 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="https://github.com/IFA-AP-01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our GitHub projects"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-blue-600 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="tel:+84859885874"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call us"
        >
          <FaPhone />
        </a>
      </motion.div>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          // Append reCAPTCHA token to formData
          if (!executeRecaptcha) {
            toast.error("reCAPTCHA is not ready. Please try again later.");
            return;
          }
          const token = await executeRecaptcha("contact_form");
    
          formData.append("recaptchaToken", token);
          const { data, error } = await sendEmail(formData);
         
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-30 transition-all dark:outline-none resize-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-30 transition-all dark:outline-none resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      </GoogleReCaptchaProvider>
    </motion.section>
  );
}
