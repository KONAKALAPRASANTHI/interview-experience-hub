import { useState } from "react";

export default function Jobs() {
  const [expanded, setExpanded] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    location: "All",
    type: "All",
    mode: "All",
  });

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore",
      type: "Full-time",
      mode: "Hybrid",
      openings: 5,
      experience: "0–2 years",
      salary: "₹60 LPA",
      description:
        "Work on large-scale distributed systems powering Google products like Search and YouTube. Focus on scalability, performance, and system design.",
      skills: ["DSA", "System Design", "Java/Python"],
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Backend Developer",
      location: "Hyderabad",
      type: "Full-time",
      mode: "Remote",
      openings: 8,
      experience: "1–3 years",
      salary: "₹15 LPA",
      description:
        "Build cloud-based backend systems using Azure. Work on APIs, microservices, and enterprise applications.",
      skills: ["C#", ".NET", "Azure"],
    },
    {
      id: 3,
      company: "Amazon",
      role: "Full Stack Developer",
      location: "Chennai",
      type: "Full-time",
      mode: "Hybrid",
      openings: 10,
      experience: "1–2 years",
      salary: "₹18 LPA",
      description:
        "Develop scalable full-stack systems for Amazon retail platform handling millions of users daily.",
      skills: ["React", "Node.js", "Microservices"],
    },
    {
      id: 4,
      company: "TCS",
      role: "Software Developer",
      location: "Pune",
      type: "Full-time",
      mode: "On-site",
      openings: 20,
      experience: "0–2 years",
      salary: "₹4 LPA",
      description:
        "Work on enterprise software solutions, testing, and client applications.",
      skills: ["Java", "SQL"],
    },
    {
      id: 5,
      company: "Infosys",
      role: "Frontend Developer",
      location: "Mysore",
      type: "Part-time",
      mode: "On-site",
      openings: 12,
      experience: "0–2 years",
      salary: "₹4.5 LPA",
      description:
        "Build responsive UI applications using modern frontend frameworks.",
      skills: ["HTML", "CSS", "React"],
    },
    {
      id: 6,
      company: "Zoho",
      role: "Software Engineer",
      location: "Chennai",
      type: "Full-time",
      mode: "On-site",
      openings: 6,
      experience: "0–3 years",
      salary: "₹8 LPA",
      description:
        "Work on Zoho business applications focusing on backend systems and UI improvements.",
      skills: ["Java", "DSA", "Problem Solving"],
    },
    {
      id: 7,
      company: "Paytm",
      role: "Backend Developer",
      location: "Noida",
      type: "Full-time",
      mode: "Hybrid",
      openings: 7,
      experience: "1–3 years",
      salary: "₹12 LPA",
      description:
        "Build scalable payment systems and APIs for millions of users.",
      skills: ["Node.js", "Microservices", "MongoDB"],
    },
    {
      id: 8,
      company: "Swiggy",
      role: "Frontend Developer",
      location: "Bangalore",
      type: "Full-time",
      mode: "Hybrid",
      openings: 5,
      experience: "0–2 years",
      salary: "₹14 LPA",
      description: "Develop customer-facing UI for food delivery platform.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 9,
      company: "Zomato",
      role: "Software Engineer",
      location: "Gurgaon",
      type: "Full-time",
      mode: "Remote",
      openings: 9,
      experience: "1–3 years",
      salary: "₹16 LPA",
      description:
        "Work on restaurant and delivery systems with high scalability.",
      skills: ["Node.js", "React", "System Design"],
    },
    {
      id: 10,
      company: "Flipkart",
      role: "SDE-1",
      location: "Bangalore",
      type: "Full-time",
      mode: "Hybrid",
      openings: 12,
      experience: "0–2 years",
      salary: "₹20 LPA",
      description: "Build e-commerce systems handling large-scale traffic.",
      skills: ["Java", "DSA", "Spring Boot"],
    },
    {
      id: 11,
      company: "Adobe",
      role: "Frontend Engineer",
      location: "Noida",
      type: "Full-time",
      mode: "Hybrid",
      openings: 4,
      experience: "1–3 years",
      salary: "₹25 LPA",
      description: "Work on creative cloud applications and UI tools.",
      skills: ["React", "TypeScript", "UI Design"],
    },
    {
      id: 12,
      company: "Oracle",
      role: "Backend Engineer",
      location: "Bangalore",
      type: "Full-time",
      mode: "On-site",
      openings: 6,
      experience: "2–4 years",
      salary: "₹22 LPA",
      description: "Work on enterprise database and cloud systems.",
      skills: ["Java", "SQL", "Cloud"],
    },
    {
      id: 13,
      company: "IBM",
      role: "Software Developer",
      location: "Pune",
      type: "Full-time",
      mode: "Hybrid",
      openings: 8,
      experience: "1–3 years",
      salary: "₹10 LPA",
      description: "Work on AI, cloud, and enterprise solutions.",
      skills: ["Python", "Cloud", "AI"],
    },
    {
      id: 14,
      company: "Capgemini",
      role: "Junior Developer",
      location: "Hyderabad",
      type: "Full-time",
      mode: "On-site",
      openings: 15,
      experience: "0–2 years",
      salary: "₹4.5 LPA",
      description: "Work on client-based software development projects.",
      skills: ["Java", "SQL"],
    },
    {
      id: 15,
      company: "Cognizant",
      role: "Programmer Analyst",
      location: "Chennai",
      type: "Full-time",
      mode: "On-site",
      openings: 10,
      experience: "0–2 years",
      salary: "₹4 LPA",
      description: "Work on enterprise applications and support systems.",
      skills: ["Java", "Testing"],
    },
    {
      id: 16,
      company: "HCL",
      role: "Software Engineer",
      location: "Noida",
      type: "Full-time",
      mode: "On-site",
      openings: 9,
      experience: "0–3 years",
      salary: "₹5 LPA",
      description: "Work on IT services and product development.",
      skills: ["Java", "SQL"],
    },
    {
      id: 17,
      company: "Intel",
      role: "Hardware Engineer",
      location: "Bangalore",
      type: "Full-time",
      mode: "On-site",
      openings: 3,
      experience: "2–4 years",
      salary: "₹28 LPA",
      description: "Work on chip design and hardware systems.",
      skills: ["VLSI", "C", "Hardware Design"],
    },
    {
      id: 18,
      company: "Cisco",
      role: "Network Engineer",
      location: "Bangalore",
      type: "Full-time",
      mode: "Hybrid",
      openings: 5,
      experience: "1–3 years",
      salary: "₹18 LPA",
      description: "Work on networking systems and infrastructure.",
      skills: ["Networking", "Linux", "Cloud"],
    },
    {
      id: 19,
      company: "Accenture",
      role: "Software Developer",
      location: "Pune",
      type: "Full-time",
      mode: "Hybrid",
      openings: 20,
      experience: "0–2 years",
      salary: "₹4.5 LPA",
      description: "Work on client projects and enterprise applications.",
      skills: ["Java", "React"],
    },
    {
      id: 20,
      company: "Deloitte",
      role: "Analyst",
      location: "Hyderabad",
      type: "Full-time",
      mode: "On-site",
      openings: 6,
      experience: "0–2 years",
      salary: "₹6 LPA",
      description: "Work on business analysis and consulting projects.",
      skills: ["Excel", "SQL", "Analytics"],
    },
  ];

  // FILTER LOGIC
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.location === "All" || job.location === filters.location) &&
      (filters.type === "All" || job.type === filters.type) &&
      (filters.mode === "All" || job.mode === filters.mode) &&
      (filters.search === "" ||
        job.role.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div style={styles.page}>
      {/* TITLE */}
      <h1 style={styles.title}>Find Your Dream Job</h1>

      {/* FILTER BAR */}
      <div style={styles.filterBar}>
        {/* SEARCH */}
        <input
          placeholder="Search role or company..."
          style={styles.input}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />

        {/* LOCATION */}
        <select
          style={styles.select}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="All">All Locations</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Pune</option>
          <option>Mysore</option>
        </select>

        {/* TYPE */}
        <select
          style={styles.select}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="All">All Types</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>

        {/* MODE */}
        <select
          style={styles.select}
          onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
        >
          <option value="All">All Modes</option>
          <option>Remote</option>
          <option>On-site</option>
          <option>Hybrid</option>
        </select>
      </div>

      {/* JOB LIST */}
      <div style={styles.container}>
        {filteredJobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <div style={styles.top}>
              <div>
                <h2 style={styles.company}>{job.company}</h2>
                <p style={styles.role}>{job.role}</p>
              </div>

              <div style={styles.meta}>
                <p>{job.location}</p>
                <p>
                  {job.type} • {job.mode}
                </p>
              </div>
            </div>

            <div style={styles.info}>
              <span>👥 {job.openings}</span>
              <span>💼 {job.experience}</span>
              <span>💰 {job.salary}</span>
            </div>

            <p style={styles.desc}>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    background: "#0b0f14",
    minHeight: "100vh",
    padding: "20px",
    color: "#e5e7eb",
    fontFamily: "system-ui",
  },

  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  /* FILTER BAR */
  filterBar: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "25px",
  },

  input: {
    padding: "10px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "8px",
    color: "white",
    width: "200px",
  },

  select: {
    padding: "10px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "8px",
    color: "white",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
  },

  card: {
    background: "#111",
    border: "1px solid #222",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
  },

  company: {
    color: "#06b6d4",
    margin: 0,
  },

  role: {
    opacity: 0.7,
  },

  meta: {
    textAlign: "right",
    fontSize: "13px",
    opacity: 0.7,
  },

  info: {
    display: "flex",
    gap: "15px",
    fontSize: "12px",
    opacity: 0.8,
    marginTop: "10px",
  },

  desc: {
    marginTop: "10px",
    fontSize: "13px",
    lineHeight: "1.6",
    opacity: 0.9,
  },
};
