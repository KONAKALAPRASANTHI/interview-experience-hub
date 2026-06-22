import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      {/* LEFT */}
      <div style={styles.left}>
        <Logo />
      </div>

      {/* HAMBURGER */}
      <div style={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* CENTER LINKS */}
      <div
        style={{
          ...styles.centerLinks,
          ...(open ? styles.mobileOpen : {}),
        }}
      >
        <Link to="/" style={isActive("/") ? styles.activeLink : styles.link}>
          Home
        </Link>
        <Link
          to="/companies"
          style={isActive("/companies") ? styles.activeLink : styles.link}
        >
          Companies
        </Link>
        <Link
          to="/reviews"
          style={isActive("/reviews") ? styles.activeLink : styles.link}
        >
          Reviews
        </Link>
        <Link
          to="/jobs"
          style={isActive("/jobs") ? styles.activeLink : styles.link}
        >
          Jobs
        </Link>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <SignedOut>
          <SignInButton mode="modal">
            <button style={styles.loginBtn}>Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

/* styles */

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 22px",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  left: {
    flex: "1",
  },

  hamburger: {
    display: "none",
    fontSize: "22px",
    cursor: "pointer",
  },

  centerLinks: {
    flex: "2",
    display: "flex",
    justifyContent: "center",
    gap: "18px",
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    padding: "6px 10px",
    borderRadius: "8px",
  },

  activeLink: {
    textDecoration: "none",
    color: "#06b6d4",
    background: "rgba(6,182,212,0.1)",
    padding: "6px 10px",
    borderRadius: "8px",
  },

  right: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
  },

  loginBtn: {
    padding: "8px 14px",
    background: "#06b6d4",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
};
