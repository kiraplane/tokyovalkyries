import type { GuideFaq } from '@/data/tokyovalkyries/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#3b2b62] bg-[#111126] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f8f6ff]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#3b2b62] bg-[#070711] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f8f6ff] transition group-open:text-[#54e7ff]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#bdb3d2]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
