import { useState } from "react";

export default function Profile() {
  const [user] = useState({
    name: "Your Name",
    email: "yourmail@gmail.com",
    role: "Student / Developer",
  });

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.text}>{user.email}</p>
        <p style={styles.text}>{user.role}</p>

        <button style={styles.btn}>Edit Profile</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  card: {
    background: "#111",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    width: "300px",
    border: "1px solid #222",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#06b6d4",
    color: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 auto 15px",
  },

  name: {
    margin: "10px 0 5px",
  },

  text: {
    margin: "5px 0",
    opacity: 0.7,
    fontSize: "14px",
  },

  btn: {
    marginTop: "15px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    background: "#06b6d4",
    color: "#0b0f14",
    fontWeight: "bold",
    cursor: "pointer",
  },
};