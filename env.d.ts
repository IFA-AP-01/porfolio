// Extend the NodeJS.ProcessEnv interface to include RESEND_API_KEY
declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY: string;
  }
}