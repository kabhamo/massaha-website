"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormValues {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

// Optional Formspree integration: set NEXT_PUBLIC_FORMSPREE_ID to enable real delivery.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const { t, isRTL } = useLanguage();
  const f = t.contact.form;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      if (FORMSPREE_ID) {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        // Fallback: open the user's mail client with a prefilled message.
        const subject = encodeURIComponent(`New enquiry — ${data.projectType}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.projectType}\n\n${data.message}`
        );
        window.location.href = `mailto:hello@massaha.arch?subject=${subject}&body=${body}`;
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-divider bg-white/50 px-4 py-3 text-ink placeholder:text-earth/50 outline-none transition-colors focus:border-sand focus:ring-2 focus:ring-sand/30";
  const labelClass = "mb-2 block text-sm font-medium text-ink";
  const errorClass = "mt-1.5 text-xs text-red-700";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-divider bg-white/50 px-6 py-16 text-center"
          role="status"
          aria-live="polite"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand/20 text-earth">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="mt-5 font-display text-3xl text-ink">{f.successTitle}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-earth">{f.successBody}</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="link-underline mt-6 text-sm text-earth hover:text-ink"
          >
            {f.sendAnother}
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                {f.name} <span className="text-earth">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={fieldClass}
                aria-invalid={!!errors.name}
                {...register("name", { required: f.required })}
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                {f.email} <span className="text-earth">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: f.required,
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: f.invalidEmail },
                })}
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className={labelClass}>
              {f.projectType} <span className="text-earth">*</span>
            </label>
            <select
              id="projectType"
              defaultValue=""
              className={fieldClass}
              dir={isRTL ? "rtl" : "ltr"}
              aria-invalid={!!errors.projectType}
              {...register("projectType", { required: f.required })}
            >
              <option value="" disabled>
                {f.selectPlaceholder}
              </option>
              {f.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              {f.message} <span className="text-earth">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={f.messagePlaceholder}
              className={`${fieldClass} resize-none`}
              aria-invalid={!!errors.message}
              {...register("message", { required: f.required })}
            />
            {errors.message && <p className={errorClass}>{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-linen transition-all duration-300 hover:bg-earth disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? f.sending : f.submit}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
