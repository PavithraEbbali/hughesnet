import type { ReactNode } from 'react';

/** Shared section shell so vertical rhythm and heading hierarchy stay uniform. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = 'white',
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  tone?: 'white' | 'slate' | 'navy';
  children: ReactNode;
}) {
  const tones = {
    white: 'bg-white',
    slate: 'bg-brand-slate',
    navy: 'bg-brand-navy-deep',
  } as const;

  const isNavy = tone === 'navy';

  return (
    <section id={id} className={`section ${tones[tone]}`}>
      <div className="shell">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className={isNavy ? 'eyebrow text-brand-cyan' : 'eyebrow'}>{eyebrow}</p>
          ) : null}
          <h2
            className={`mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl ${
              isNavy ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {title}
          </h2>
          {intro ? (
            <div
              className={`mt-4 text-base leading-relaxed ${
                isNavy ? 'text-white/75' : 'text-brand-muted'
              }`}
            >
              {intro}
            </div>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
