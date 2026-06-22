export default function Logo() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        {/* CHAT + PULSE ICON */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* chat bubble */}
          <path
            d="M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
            stroke="#06b6d4"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* pulse inside */}
          <path
            d="M7 12h2l2-2 2 4 2-3 2 2h2"
            stroke="#22c55e"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* TEXT */}
        <span style={styles.text}>
          <span style={styles.interview}>Interview</span>
          <span style={styles.pulse}>Pulse</span>
        </span>
      </div>

      <span style={styles.subtitle}>Interview Experience Hub</span>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.1",
    fontFamily:
      '"Lucida Sans", "Lucida Grande", "Segoe UI", sans-serif',
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  text: {
    fontSize: "18px",
    fontWeight: "700",
  },

  interview: {
    color: "#06b6d4",
  },

  pulse: {
    color: "#e5e7eb",
    marginLeft: "4px",
  },

  subtitle: {
    fontSize: "11px",
    fontStyle: "italic",
    color: "#9ca3af",
    marginTop: "2px",
  },
};