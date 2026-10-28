import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../types';

interface Props {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="divide-y divide-hotel-border" role="list" aria-label="Frequently asked questions">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const headingId = `faq-heading-${idx}`;
        return (
          <div key={idx} role="listitem">
            <h3>
              <button
                id={headingId}
                type="button"
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-sans font-medium text-hotel-charcoal text-sm sm:text-base pr-4 group-hover:text-hotel-green transition-colors duration-150">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-hotel-muted transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-hotel-green' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-hotel-muted text-sm font-sans leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
