import EmailSignup from "./EmailSignup";

export default function Footer() {
  return (
    <footer className="bg-olive text-cream py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Second CTA */}
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Be the first to taste DipEZ
        </h2>
        <p className="font-body text-olive-pale mb-10 text-lg">
          Sign up and we&apos;ll let you know when we launch.
        </p>

        <EmailSignup variant="footer" />

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-14 mb-10">
          <a
            href="https://instagram.com/eatdipez"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300"
            aria-label="Follow DipEZ on Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="font-body text-sm font-medium">Instagram</span>
          </a>

          <span className="text-cream/20">|</span>

          <a
            href="https://tiktok.com/@eatdipez"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300"
            aria-label="Follow DipEZ on TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
            </svg>
            <span className="font-body text-sm font-medium">TikTok</span>
          </a>
        </div>

        {/* Bottom */}
        <div className="divider-line opacity-20 mb-8" />

        <p className="font-body text-xs text-cream/40 mb-2">
          Made with real ingredients. No artificial anything.
        </p>
        <p className="font-body text-xs text-cream/30">
          &copy; {new Date().getFullYear()} DipEZ. Coming 2026.
        </p>
      </div>
    </footer>
  );
}
