"use client";

import { useActionState } from "react";
import { subscribeEmail } from "@/app/actions";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-8 py-3.5 bg-terracotta text-warm-white font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-terracotta-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-md hover:shadow-lg"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Joining...
        </span>
      ) : (
        "Join the Waitlist"
      )}
    </button>
  );
}

export default function EmailSignup({
  variant = "hero",
}: {
  variant?: "hero" | "footer";
}) {
  const [state, formAction, isPending] = useActionState(
    async (_prev: { success?: boolean; error?: string } | null, formData: FormData) => {
      return await subscribeEmail(formData);
    },
    null
  );

  if (state?.success) {
    return (
      <div className="animate-fade-in text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-olive/10 rounded-full">
          <svg
            className="w-5 h-5 text-olive"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="font-body font-semibold text-olive">
            You&apos;re on the list!
          </span>
        </div>
        <p className="mt-3 text-sm text-olive-light font-body">
          We&apos;ll let you know when DipEZ is ready to taste.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="w-full max-w-md mx-auto">
      <div
        className={`flex flex-col sm:flex-row gap-3 ${
          variant === "hero" ? "items-center" : "items-stretch"
        }`}
      >
        <label htmlFor={`email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 w-full px-5 py-3.5 bg-warm-white border-2 border-olive/15 rounded-full font-body text-charcoal placeholder:text-olive-pale focus:border-terracotta focus:outline-none transition-colors duration-300"
        />
        <SubmitButton pending={isPending} />
      </div>
      {state?.error && (
        <p className="mt-2 text-sm text-terracotta font-body text-center">
          {state.error}
        </p>
      )}
    </form>
  );
}
