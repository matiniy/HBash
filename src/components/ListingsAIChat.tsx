'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export type ListingForChat = {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: string;
  features: string[];
  type: string;
  keywords: string[];
};

type ListingsAIChatProps = {
  listings: ListingForChat[];
  formatPrice: (price: number) => string;
};

/** Build a response based on the user query and current listings (no external API). */
function getResponseForQuery(
  query: string,
  listings: ListingForChat[],
  formatPrice: (price: number) => string
): { text: string; listings: ListingForChat[] } {
  const q = query.toLowerCase().trim();
  if (!q) {
    return {
      text: "Try asking for a location (e.g. Uptown, Highland Park), property type (condo, townhome, luxury), or features like pool, balcony, or city views. I'll suggest properties from our current listings.",
      listings: [],
    };
  }

  const words = q.split(/\s+/).filter(Boolean);
  let matched = listings.filter((listing) => {
    const searchText = [
      listing.title,
      listing.location,
      listing.type,
      ...listing.features,
      ...listing.keywords,
    ]
      .join(' ')
      .toLowerCase();
    return words.some((w) => searchText.includes(w) || w.length >= 3 && searchText.includes(w));
  });

  // If no keyword match, check for common intents
  if (matched.length === 0) {
    if (/\b(cheap|affordable|under|budget|500|500k)\b/.test(q)) {
      matched = listings.filter((l) => l.price < 600000);
    } else if (/\b(expensive|luxury|high|million|2m|1m)\b/.test(q)) {
      matched = listings.filter((l) => l.price >= 1000000);
    } else if (/\b(house|family|home|single)\b/.test(q)) {
      matched = listings.filter((l) => l.type === 'single-family');
    } else if (/\b(condo|apartment)\b/.test(q)) {
      matched = listings.filter((l) => l.type === 'condo');
    } else if (/\b(townhome|town)\b/.test(q)) {
      matched = listings.filter((l) => l.type === 'townhome');
    } else if (/\b(dallas|downtown|uptown|highland|bishop|lakewood|victory)\b/.test(q)) {
      matched = listings.filter((l) =>
        l.location.toLowerCase().includes('dallas') ||
        l.location.toLowerCase().includes('downtown') ||
        l.location.toLowerCase().includes('uptown') ||
        l.location.toLowerCase().includes('highland') ||
        l.location.toLowerCase().includes('bishop') ||
        l.location.toLowerCase().includes('lakewood') ||
        l.location.toLowerCase().includes('victory')
      );
    }
  }

  if (matched.length === 0) {
    return {
      text: `We don't have any listings that match "${query}" right now. Try "condo in Dallas", "pool", "under $1M", or "luxury" to see what's available. Our inventory is updated regularly—feel free to contact us for personalized help.`,
      listings: [],
    };
  }

  const list = matched
    .slice(0, 5)
    .map((l) => `${l.title} in ${l.location} (${formatPrice(l.price)}).`)
    .join('\n');
  const intro =
    matched.length === 1
      ? 'Based on what you\'re looking for, we have 1 property that might work:\n\n'
      : `Based on your search, we have ${matched.length} properties that might interest you:\n\n`;
  return { text: intro + list + '\n\nView the links below for details.', listings: matched.slice(0, 5) };
}

/** Typewriter: reveal `text` character-by-character into the container. */
function useTypewriter(text: string, isActive: boolean, speedMs: number = 18) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (!isActive || !text) {
      setDisplayed('');
      indexRef.current = 0;
      return;
    }
    indexRef.current = 0;
    setDisplayed('');
  }, [text, isActive]);

  useEffect(() => {
    if (!isActive || !text) return;
    if (indexRef.current >= text.length) return;

    const id = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, isActive, speedMs]);

  return displayed;
}

const LIVE_SEARCH_DEBOUNCE_MS = 450;

export default function ListingsAIChat({ listings, formatPrice }: ListingsAIChatProps) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [matchedListings, setMatchedListings] = useState<ListingForChat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const displayedText = useTypewriter(response, !!response && isLoading === false, 16);
  const responseContainerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Live search: debounced search as user types
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = input.trim();
    if (!trimmed) {
      setResponse('');
      setMatchedListings([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    debounceRef.current = setTimeout(() => {
      const { text, listings: matched } = getResponseForQuery(trimmed, listings, formatPrice);
      setResponse(text);
      setMatchedListings(matched);
      setIsLoading(false);
      debounceRef.current = null;
    }, LIVE_SEARCH_DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run when input changes
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Live search already runs on input change; submit just prevents form default
  };

  // Keep scroll at bottom while typewriter runs
  useEffect(() => {
    const el = responseContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [displayedText]);

  return (
    <div className="listings-ai-chat mt-8 sm:mt-10 flex flex-col items-center">
      <div className="listings-ai-chat-label text-sm font-medium text-[#144552]/80 mb-2 text-center">
        Ask about our listings
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xl mx-auto items-center">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none text-[#144552]">
            <svg
              className="h-11 w-11 listings-ai-chat-sparkle-icon flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              {/* 4-point star shape: one larger (right), two smaller (lower left) */}
              <path
                transform="translate(15, 11) scale(3.2)"
                d="M1 0L.35.35L0 1L-.35.35L-1 0L-.35-.35L0-1L.35-.35Z"
              />
              <path
                transform="translate(6, 14) scale(1.6)"
                d="M1 0L.35.35L0 1L-.35.35L-1 0L-.35-.35L0-1L.35-.35Z"
              />
              <path
                transform="translate(10, 18) scale(1.6)"
                d="M1 0L.35.35L0 1L-.35.35L-1 0L-.35-.35L0-1L.35-.35Z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="e.g. condo under $500K, pool, Uptown Dallas..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="listings-form-text listings-ai-chat-input w-full pl-14 pr-0 py-3 text-base min-h-[44px] focus:ring-0"
            aria-label="Ask AI about listings"
          />
        </div>
        <span className="listings-ai-chat-hint text-xs text-[#144552]/70 text-center block">
          {isLoading ? 'Searching…' : 'Suggestions update as you type'}
        </span>
      </form>

      {(response || isLoading) && (
        <div
          ref={responseContainerRef}
          className="listings-ai-chat-response mt-4 p-4 w-full max-w-xl mx-auto min-h-[120px] max-h-[280px] overflow-y-auto rounded border border-[#144552]/15 bg-[#144552]/[0.03]"
          aria-live="polite"
        >
          {isLoading && !displayedText && (
            <span className="listings-ai-chat-response-text text-[#144552]/70">
              Finding matches…
            </span>
          )}
          <div className="listings-ai-chat-response-text text-[#144552] whitespace-pre-wrap break-words font-[inherit] text-[15px] leading-relaxed">
            {displayedText}
            {!!response && displayedText.length < response.length && (
              <span className="listings-ai-chat-cursor" aria-hidden />
            )}
          </div>
          {matchedListings.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {matchedListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className="text-sm font-medium text-[#2B8097] hover:underline"
                >
                  {listing.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
