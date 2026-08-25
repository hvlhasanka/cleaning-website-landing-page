import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import menuIcon from "../../assets/icons/menu.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "(+91) 999-999-9999";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-header backdrop-blur-sm">
      <div className="mx-auto flex h-[89px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="font-display text-[20px] font-extrabold leading-8 text-navy"
        >
          Country Cleaning Service
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-medium leading-[23px] text-navy transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-[14.5px] font-semibold leading-[23px] text-navy transition-colors hover:text-teal"
          >
            <span aria-hidden="true">📞</span>
            {PHONE_NUMBER}
          </a>
          <a
            href="#quote"
            className="flex h-[52px] items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold leading-6 text-white shadow-cta transition-colors hover:bg-orange-dark"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-xl transition-opacity hover:opacity-70 lg:hidden"
        >
          {menuOpen ? (
            <FiX className="size-7 text-navy" aria-hidden="true" />
          ) : (
            <img src={menuIcon} alt="" className="size-11" />
          )}
        </button>
      </div>

      {/* Mobile menu popup */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[89px] z-40 bg-navy/40 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 origin-top px-5 pt-3 sm:px-8 lg:hidden"
          >
            <nav className="rounded-2xl bg-white p-6 shadow-2xl shadow-navy/30">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="border-b border-hairline">
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-lg font-semibold text-navy transition-colors hover:text-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex h-[52px] items-center justify-center rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold leading-6 text-white shadow-cta transition-colors hover:bg-orange-dark"
              >
                Get a Free Quote
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
