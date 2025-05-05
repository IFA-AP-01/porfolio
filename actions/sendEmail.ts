import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const recaptchaToken = formData.get("recaptchaToken");

  // Validate inputs
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(recaptchaToken, 1000)) {
    return {
      error: "Invalid reCAPTCHA token",
    };
  }
  // Proceed with sending email
  let data;
  try {
    const response = await fetch("https://mail-for-portfolio.vercel.app/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: senderEmail,
        content: message,
        subject: "New message from contact form",
        recaptchaToken: recaptchaToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    data = await response.json();
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};