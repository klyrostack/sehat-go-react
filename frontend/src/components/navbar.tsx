import type { UserSession } from "../types";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  activeUser: UserSession | null;
  onLogout: () => void;
}

export function Navbar({
  currentView,
  onNavigate,
  activeUser,
  onLogout,
}: NavbarProps) {
  return (
    <header className="site-header">
      <div className="container navbar">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span>
            Sehat <span className="highlight">Go</span>
          </span>
        </a>

        {/* Mobile Navigation Toggle */}
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle-checkbox"
        />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label"
          aria-label="Toggle Navigation"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <a
            href="#home"
            className={`nav-link ${currentView === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
          >
            Home
          </a>
          <a
            href="#clinics"
            className={`nav-link ${currentView === "category" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate("category");
            }}
          >
            Find Clinics
          </a>
        </nav>

        {/* Dynamic Header Actions (Conditional Rendering) */}
        <div className="nav-actions">
          {activeUser ? (
            <>
              <button
                className={`btn btn-ghost btn-sm ${currentView === "dashboard" ? "active" : ""}`}
                onClick={() => onNavigate("dashboard")}
              >
                Dashboard
              </button>
              <button className="btn btn-outline btn-sm" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => onNavigate("login")}
              >
                Login
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => onNavigate("register")}
              >
                Register Clinic
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
