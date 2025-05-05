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
  if (!recaptchaToken) {
    return {
      error: "Invalid or missing reCAPTCHA token",
    };
  }
  // Proceed with sending email
  let data;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }
    const response = await fetch(`${apiUrl}/send-email`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: senderEmail,
        content: message,
        subject: "IFA Team new message from contact form",
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