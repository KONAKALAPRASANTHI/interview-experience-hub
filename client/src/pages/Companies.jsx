import { useState } from "react";

export default function Companies() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const companies = [
    { name: "Google", type: "Product Based", rating: 4.8, location: "Bangalore, Hyderabad", desc: "Google interviews focus on DSA, graphs, recursion, and system design." },
    { name: "Microsoft", type: "Product Based", rating: 4.7, location: "Hyderabad, Bangalore", desc: "Microsoft emphasizes coding, system design basics and scalable thinking." },
    { name: "Amazon", type: "Product Based", rating: 4.5, location: "Bangalore, Chennai", desc: "Amazon focuses on leadership principles + DSA problem solving." },
    { name: "Flipkart", type: "E-commerce", rating: 4.3, location: "Bangalore", desc: "Flipkart interviews include system design basics and real-world scenarios." },
    { name: "TCS", type: "Service Based", rating: 4.0, location: "Pan India", desc: "TCS focuses on aptitude, basic coding and HR rounds." },
    { name: "Infosys", type: "Service Based", rating: 4.1, location: "Pan India", desc: "Infosys includes aptitude tests and basic programming." },
    { name: "Accenture", type: "Consulting", rating: 4.2, location: "Bangalore, Pune", desc: "Accenture evaluates logic building and communication skills." },
    { name: "IBM", type: "Tech & Consulting", rating: 4.4, location: "Bangalore", desc: "IBM focuses on cloud, AI and enterprise systems." },
    { name: "Oracle", type: "Product Based", rating: 4.3, location: "Bangalore", desc: "Oracle focuses on databases and backend systems." },
    { name: "Adobe", type: "Product Based", rating: 4.6, location: "Noida, Bangalore", desc: "Adobe focuses on DSA and product thinking." },
    { name: "Paytm", type: "FinTech", rating: 4.1, location: "Noida", desc: "Paytm focuses on payment systems and APIs." },
    { name: "Zoho", type: "Product Based", rating: 4.4, location: "Chennai", desc: "Zoho is known for strong logic-based coding rounds." },
    { name: "Swiggy", type: "E-commerce", rating: 4.2, location: "Bangalore", desc: "Swiggy focuses on delivery systems and APIs." },
    { name: "Zomato", type: "E-commerce", rating: 4.2, location: "Gurgaon", desc: "Zomato focuses on scalable backend systems." },
    { name: "Wipro", type: "Service Based", rating: 4.0, location: "Pan India", desc: "Wipro includes aptitude and basic programming." },
    { name: "Capgemini", type: "Consulting", rating: 4.1, location: "Pune, Bangalore", desc: "Capgemini focuses on logical reasoning." },
    { name: "Deloitte", type: "Consulting", rating: 4.5, location: "Hyderabad, Bangalore", desc: "Deloitte focuses on case studies and analytics." },
    { name: "Cognizant", type: "Service Based", rating: 4.1, location: "Chennai, Pune", desc: "Cognizant includes basic coding rounds." },
    { name: "HCL", type: "Service Based", rating: 4.0, location: "Noida", desc: "HCL focuses on basic programming logic." },
    { name: "Cisco", type: "Product Based", rating: 4.6, location: "Bangalore", desc: "Cisco focuses on networking and distributed systems." },
    { name: "Meta", type: "Product Based", rating: 4.7, location: "Global", desc: "Meta is DSA-heavy with graphs and system design." },
    { name: "LinkedIn", type: "Product Based", rating: 4.6, location: "Bangalore", desc: "LinkedIn focuses on graph-based problems." },
    { name: "Uber", type: "Product Based", rating: 4.5, location: "Hyderabad", desc: "Uber focuses on real-time systems and maps." },
    { name: "Spotify", type: "Product Based", rating: 4.6, location: "Remote", desc: "Spotify focuses on streaming systems." },
  ];

  // SEARCH FILTER
  let filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.type.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  // TYPE FILTER
  if (typeFilter !== "All") {
    filtered = filtered.filter((c) => c.type === typeFilter);
  }

  // unique types for buttons
  const types = ["All", ...new Set(companies.map((c) => c.type))];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Companies</h1>
      <p style={styles.sub}>Search & filter companies</p>

      {/* SEARCH */}
      <input
        placeholder="Search company, type or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* FILTER BUTTONS */}
      <div style={styles.filters}>
        {types.map((t, i) => (
          <button
            key={i}
            onClick={() => setTypeFilter(t)}
            style={{
              ...styles.filterBtn,
              background: typeFilter === t ? "#06b6d4" : "rgba(255,255,255,0.05)",
              color: typeFilter === t ? "#0b0f14" : "white",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <p style={{ opacity: 0.6 }}>No companies found</p>
        ) : (
          filtered.map((c, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => setSelected(c)}
            >
              <h3 style={styles.name}>{c.name}</h3>
              <p style={styles.type}>{c.type}</p>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div style={styles.overlay} onClick={() => setSelected(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p style={styles.info}>⭐ Rating: {selected.rating}/5</p>
            <p style={styles.info}>📍 {selected.location}</p>
            <p style={styles.desc}>{selected.desc}</p>

            <button style={styles.closeBtn} onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/*  STYLES   */

const styles = {
  page: {
    background: "#0b0f14",
    minHeight: "100vh",
    padding: "30px",
    color: "white",
  },

  title: {
    fontSize: "28px",
    fontWeight: "800",
  },

  sub: {
    opacity: 0.6,
    marginTop: "5px",
  },

  search: {
    marginTop: "15px",
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none",
  },

  filters: {
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  filterBtn: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
  },

  grid: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center",
  },

  name: {
    color: "#06b6d4",
  },

  type: {
    fontSize: "12px",
    opacity: 0.7,
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "420px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(15px)",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
  },

  info: {
    marginTop: "8px",
    opacity: 0.85,
  },

  desc: {
    marginTop: "10px",
    fontSize: "13px",
    opacity: 0.75,
    lineHeight: "1.5",
  },

  closeBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#06b6d4",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
  },
};