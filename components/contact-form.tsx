import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

// Child component that uses the hook
const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (formData: FormData) => {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not ready. Please try again later.");
      return;
    }

    const token = await executeRecaptcha();
    formData.append("recaptchaToken", token);

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <form
      className="mt-10 flex flex-col dark:text-black"
      action={handleSubmit}
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
  );
};

// Parent component with GoogleReCaptchaProvider
const ContactSection = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
};

export default ContactSection;