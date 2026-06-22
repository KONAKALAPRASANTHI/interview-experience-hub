import { useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

export default function PostExperience() {
  const { user, isSignedIn } = useUser()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    company: "",
    role: "",
    description: "",
    questions: "",
    tips: "",
  })

  if (!isSignedIn) {
    return (
      <div style={styles.center}>
        <h2>Please login to post experience</h2>
        <button style={styles.btn} onClick={() => navigate("/sign-in")}>
          Go to Login
        </button>
      </div>
    )
  }

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/experiences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    })

    alert("Posted successfully 🚀")
    navigate("/")
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Post Interview Experience</h2>

        <input
          style={styles.input}
          placeholder="Company Name"
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Role (e.g. SDE, Intern)"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />

        <textarea
          style={styles.textarea}
          placeholder="Describe your experience..."
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <textarea
          style={styles.textarea}
          placeholder="Interview Questions"
          onChange={(e) => setForm({ ...form, questions: e.target.value })}
        />

        <textarea
          style={styles.textarea}
          placeholder="Tips for others"
          onChange={(e) => setForm({ ...form, tips: e.target.value })}
        />

        <button style={styles.submitBtn} onClick={handleSubmit}>
          Submit Experience
        </button>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  title: {
    marginBottom: "10px",
    textAlign: "center",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    minHeight: "80px",
  },

  submitBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  center: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  btn: {
    padding: "10px 15px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
  },
}