'use client';

import { useState } from 'react';
import { CallLink } from '@/components/ui/CallLink';
import { operator } from '@/lib/content';

/**
 * Hero availability entry point.
 *
 * The ZIP is collected and echoed back, but NO availability verdict is produced
 * client-side. GSO satellite capacity is beam-dependent and cannot be resolved
 * from a ZIP, so this never renders a green check, an "Available!" badge, or any
 * other fabricated result — it hands off to the order line, which is where a
 * real coverage check actually happens.
 */
export function ZipCheck() {
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = zip.trim();
    if (!/^\d{5}$/.test(clean)) {
      setError('Enter a 5-digit ZIP code.');
      setSubmitted(null);
      return;
    }
    setError(null);
    setSubmitted(clean);
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label htmlFor="zip" className="sr-only">
            ZIP code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="Enter your ZIP code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'zip-error' : undefined}
            className="h-[52px] w-full rounded-lg border border-white/25 bg-white/95 px-4 text-base text-brand-ink placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
          />
        </div>
        <button
          type="submit"
          className="h-[52px] shrink-0 rounded-lg bg-brand-orange px-6 text-base font-bold text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          Check Availability
        </button>
      </form>

      {error ? (
        <p id="zip-error" role="alert" className="mt-2 text-sm font-semibold text-amber-300">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <div
          role="status"
          className="mt-4 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-white">
            Coverage for ZIP {submitted} is confirmed on the call.
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/75">
            Plan availability, speeds and beam capacity vary street by street, so an agent
            checks your exact address and quotes the current rate before anything is
            ordered.
          </p>
          <CallLink variant="primary" className="mt-4 w-full sm:w-auto">
            Call to order
          </CallLink>
          <p className="mt-2 text-xs text-white/60">Agents available {operator.hours}</p>
        </div>
      ) : null}
    </div>
  );
}
