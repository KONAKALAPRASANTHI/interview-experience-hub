import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          userId: user.id,
          userEmail: user.primaryEmailAddress?.emailAddress,
          userName: user.fullName,
        }),
      });

      if (res.ok) {
        setOpen(false);
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };
   
  const [form, setForm] = useState({
    company: "",
    role: "",
    userName: "",
    description: "",
    questions: "",
    tips: "",
  });

  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Flipkart",
    "IBM",
    "Accenture",
    "TCS",
    "Cognizant",
    "Infosys",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % companies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/experiences");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

 

  // fallback demo data
  const demoData = [
    {
      _id: "1",
      company: "Google",
      role: "SDE Intern",
      userName: "Aarav Sharma",
      description:
"The interview process had 2 coding rounds and 1 HR round. First round focused on DSA problems like arrays, strings, and recursion. Second round included medium-level LeetCode problems and time complexity discussion. HR round was based on teamwork and past projects.",
      questions: "Two Sum, Reverse Linked List, Subarray Sum",
      tips: "Focus heavily on DSA patterns and practice mock interviews daily",
    },
    {
      _id: "2",
      company: "Microsoft",
      role: "Software Engineer",
      userName: "Priya Reddy",
      description:
        "Microsoft interview was structured into 3 rounds including coding, system design basics, and HR. Coding round tested binary trees and graph traversal. System design focused on designing a URL shortener at a basic level.",
      questions: "Binary Tree Level Order, LRU Cache",
      tips: "Understand system design fundamentals and practice explaining solutions clearly",
    },
    {
      _id: "3",
      company: "Amazon",
      role: "SDE-1",
      userName: "Rahul Verma",
      description:
        "Amazon focused heavily on leadership principles along with coding. There were 2 coding rounds and 1 behavioral round. Coding questions were medium difficulty and required optimized solutions.",
      questions: "Merge Intervals, Sliding Window Maximum",
      tips: "Prepare Amazon leadership principles along with DSA thoroughly",
    },
    {
      _id: "4",
      company: "Accenture",
      role: "Associate Developer",
      userName: "Sneha Iyer",
      description:
        "Accenture interview was relatively easier compared to product companies. It included aptitude test, coding round, and HR discussion. Coding questions were mostly array-based and string manipulation.",
      questions: "Palindrome Check, Array Rotation",
      tips: "Focus on aptitude + basic coding + communication skills",
    },
    {
      _id: "5",
      company: "TCS",
      role: "System Engineer",
      userName: "Kiran Kumar",
      description:
        "TCS interview process included online test, technical interview, and HR round. Technical round focused on basic programming concepts and simple problem solving. HR round was smooth and communication-based.",
      questions: "Basic loops, Prime numbers, Sorting",
      tips: "Be strong in basics and maintain good communication in HR round",
    },
  ];

  const finalData = data.length > 0 ? data : demoData;

  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Ace your next <span style={styles.highlight}>{companies[index]}</span>{" "}
          Interview
        </h1>

        <p style={styles.subtitle}>
          Share and explore real interview experiences, questions, and tips.
        </p>

        {/* SEARCH */}
        <div style={styles.searchBox}>
          <input
            placeholder="Search companies, roles..."
            style={styles.searchInput}
          />
          <button style={styles.searchBtn}>Search</button>
        </div>

        {/* TAGS */}
        <div style={styles.tags}>
          <span style={styles.tag}>Coding Questions</span>
          <span style={styles.tag}>Technical Rounds</span>
          <span style={styles.tag}>Company Reviews</span>
          <span style={styles.tag}>Salary Insights</span>
        </div>
      </div>

      {/* FEED */}
      <div style={styles.feedSection}>
        <h2 style={styles.sectionTitle}>Latest Interview Experiences</h2>

        {finalData.map((item) => (
          <div
            key={item._id}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div style={styles.cardHeader}>
              <h3 style={styles.company}>{item.company}</h3>
              <span style={styles.role}>{item.role}</span>
            </div>

            {/* Avatar */}
            <div style={styles.userRow}>
              <div style={styles.avatar}>
                {item.userName ? item.userName.charAt(0) : "A"}
              </div>
              <p style={styles.user}>{item.userName}</p>
            </div>

            <p style={styles.text}>{item.description}</p>

            <div style={styles.meta}>❓ {item.questions}</div>
            <div style={styles.meta}>💡 {item.tips}</div>
             
 
 
 
 
          </div>
        ))}
      </div>

      {/* FLOATING BUTTON */}
      <button style={styles.fab} onClick={() => setOpen(true)}>
        ＋ Add Experience
      </button>

      {/* MODAL */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: "10px" }}>Add Experience</h2>

            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="role"
              placeholder="Role"
              value={form.role}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="userName"
              placeholder="Your Name"
              value={form.userName}
              onChange={handleChange}
              style={styles.input}
            />

            <textarea
              name="description"
              placeholder="Interview Experience"
              value={form.description}
              onChange={handleChange}
              style={styles.textarea}
            />

            <input
              name="questions"
              placeholder="Questions"
              value={form.questions}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="tips"
              placeholder="Tips"
              value={form.tips}
              onChange={handleChange}
              style={styles.input}
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={styles.submitBtn} onClick={handleSubmit}>
                Submit
              </button>
              <button style={styles.cancelBtn} onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    background: "#0b0f14",
    minHeight: "100vh",
    padding: "20px",
    color: "#e5e7eb",
    fontFamily: "system-ui",
  },

  hero: {
    padding: "70px 20px",
    borderRadius: "20px",
    textAlign: "center",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
  },

  title: {
    fontSize: "34px",
    fontWeight: "800",
  },

  highlight: {
    color: "#06b6d4",
  },

  subtitle: {
    marginTop: "12px",
    opacity: 0.75,
  },

  searchBox: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },

  searchInput: {
    width: "320px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
  },

  searchBtn: {
    padding: "12px 16px",
    borderRadius: "10px",
    background: "#06b6d4",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
  },

  tags: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  tag: {
    background: "rgba(6,182,212,0.08)",
    border: "1px solid rgba(6,182,212,0.2)",
    color: "#06b6d4",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  feedSection: {
    marginTop: "40px",
    maxWidth: "900px",
    margin: "auto",
  },

  sectionTitle: {
    marginBottom: "15px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "15px",
    transition: "0.3s",
    cursor: "pointer",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },

  company: {
    color: "#06b6d4",
  },

  role: {
    fontSize: "12px",
    background: "rgba(255,255,255,0.06)",
    padding: "4px 10px",
    borderRadius: "6px",
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "8px",
  },

  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#06b6d4",
    color: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
  },

  user: {
    fontSize: "13px",
    opacity: 0.7,
  },

  text: {
    marginTop: "10px",
  },

  meta: {
    marginTop: "8px",
    fontSize: "13px",
    opacity: 0.8,
  },

  fab: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "#06b6d4",
    color: "#0b0f14",
    border: "none",
    padding: "14px 18px",
    borderRadius: "50px",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(6,182,212,0.3)",
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
    width: "400px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(15px)",
    padding: "20px",
    borderRadius: "14px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
  },

  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    resize: "none",
  },

  submitBtn: {
    flex: 1,
    padding: "10px",
    background: "#06b6d4",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
  },
  likeBtn: {
    marginTop: "10px",
    background: "transparent",
    border: "1px solid #333",
    color: "white",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  commentBox: {
    marginTop: "12px",
  },

  commentInput: {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
    marginBottom: "8px",
  },

  comment: {
    fontSize: "12px",
    padding: "4px 0",
    opacity: 0.8,
  },
 
  cancelBtn: {
    flex: 1,
    padding: "10px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};
