import { useState } from "react";

export default function Reviews() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      company: "Google",
      user: "Aarav Sharma",
      role: "SDE Intern",
      likes: 12,
      comments: 3,
      text:
        "Google interview was highly structured with 2 DSA rounds and 1 HR round. Questions focused on arrays, strings, recursion, and graphs. Interviewers checked problem-solving approach and optimization skills. HR round focused on teamwork and projects.",
    },
    {
      id: 2,
      company: "Microsoft",
      user: "Priya Reddy",
      role: "Software Engineer",
      likes: 18,
      comments: 5,
      text:
        "Microsoft interview had coding, system design basics, and HR rounds. Coding focused on trees, linked lists, and hashing problems. System design included scalable architecture basics. HR round tested communication and behavioral skills.",
    },
    {
      id: 3,
      company: "Amazon",
      user: "Rahul Verma",
      role: "SDE-1",
      likes: 22,
      comments: 7,
      text:
        "Amazon interview strongly focused on Leadership Principles along with coding skills. Coding rounds included medium DSA problems like sliding window and intervals. Interviewers checked optimization and edge cases. HR round was behavioral based.",
    },
    {
      id: 4,
      company: "Accenture",
      user: "Sneha Iyer",
      role: "Associate Developer",
      likes: 9,
      comments: 2,
      text:
        "Accenture interview was moderate and beginner friendly. Aptitude test followed by coding round with arrays and strings. HR round focused on communication and confidence.",
    },
    {
      id: 5,
      company: "TCS",
      user: "Kiran Kumar",
      role: "System Engineer",
      likes: 7,
      comments: 1,
      text:
        "TCS interview was simple and structured. Aptitude test followed by basic coding questions. HR round was smooth and conversational.",
    },
    {
      id: 6,
      company: "Infosys",
      user: "Meena",
      role: "System Engineer",
      likes: 6,
      comments: 2,
      text:
        "Infosys interview focused on basics and aptitude. Coding round included simple programming logic. HR round tested communication skills.",
    },
    {
      id: 7,
      company: "IBM",
      user: "Ravi",
      role: "Developer",
      likes: 10,
      comments: 3,
      text:
        "IBM interview focused on cloud and backend concepts. Coding round included medium-level questions. System knowledge was important. HR round checked project experience.",
    },
    {
      id: 8,
      company: "Oracle",
      user: "Anjali",
      role: "Backend Engineer",
      likes: 11,
      comments: 4,
      text:
        "Oracle interview was database heavy. SQL and backend questions were asked. Coding round was moderate difficulty. HR round was formal and structured.",
    },
    {
      id: 9,
      company: "Adobe",
      user: "Karthik",
      role: "SDE",
      likes: 20,
      comments: 6,
      text:
        "Adobe interview was product focused and challenging. DSA questions were medium to hard level. System design basics were tested. Interviewers focused on clean coding.",
    },
    {
      id: 10,
      company: "Paytm",
      user: "Neha",
      role: "Backend Developer",
      likes: 8,
      comments: 2,
      text:
        "Paytm interview focused on APIs and backend systems. Coding round had practical problems. System design questions were included. HR round was casual.",
    },
    {
      id: 11,
      company: "Zoho",
      user: "Vikram",
      role: "Software Engineer",
      likes: 15,
      comments: 4,
      text:
        "Zoho interview focused heavily on logical thinking. Coding questions were tricky and required optimization. Time complexity was important in all rounds.",
    },
    {
      id: 12,
      company: "Swiggy",
      user: "Divya",
      role: "Backend Engineer",
      likes: 13,
      comments: 5,
      text:
        "Swiggy interview focused on system design and scalability. Real-world problem-solving was tested. Interviewers checked architecture thinking and trade-offs.",
    },
    {
      id: 13,
      company: "Zomato",
      user: "Arjun",
      role: "SDE",
      likes: 14,
      comments: 3,
      text:
        "Zomato interview focused on distributed systems basics. Coding round had medium DSA problems. System design questions were important.",
    },
    {
      id: 14,
      company: "Wipro",
      user: "Suresh",
      role: "Engineer",
      likes: 5,
      comments: 1,
      text:
        "Wipro interview was beginner level. Aptitude and basic coding questions were asked. HR round was short and simple.",
    },
    {
      id: 15,
      company: "Capgemini",
      user: "Pooja",
      role: "Developer",
      likes: 6,
      comments: 2,
      text:
        "Capgemini interview had aptitude and coding rounds. Questions were basic logic-based problems. HR round was easy.",
    },
    {
      id: 16,
      company: "Deloitte",
      user: "Naveen",
      role: "Analyst",
      likes: 16,
      comments: 4,
      text:
        "Deloitte interview included case study and technical rounds. Problem solving and communication skills were tested heavily.",
    },
    {
      id: 17,
      company: "Cognizant",
      user: "Ishita",
      role: "Programmer Analyst",
      likes: 8,
      comments: 2,
      text:
        "Cognizant interview was simple and beginner friendly. Coding round included basic problems. HR round focused on confidence.",
    },
    {
      id: 18,
      company: "HCL",
      user: "Manoj",
      role: "Developer",
      likes: 7,
      comments: 1,
      text:
        "HCL interview was straightforward. Basic coding and aptitude questions were asked. HR round was short.",
    },
    {
      id: 19,
      company: "Cisco",
      user: "Ritika",
      role: "Network Engineer",
      likes: 19,
      comments: 5,
      text:
        "Cisco interview focused on networking concepts and system design. Troubleshooting and problem solving were important.",
    },
    {
      id: 20,
      company: "Intel",
      user: "Deepak",
      role: "Hardware Engineer",
      likes: 21,
      comments: 6,
      text:
        "Intel interview focused on hardware and low-level concepts. Logic and system understanding were heavily tested.",
    },
  ]);

  const [newPost, setNewPost] = useState({
    company: "",
    user: "",
    role: "",
    text: "",
  });

  const addPost = () => {
    if (!newPost.company || !newPost.text) return;

    const post = {
      id: Date.now(),
      ...newPost,
      likes: 0,
      comments: 0,
    };

    setPosts([post, ...posts]);
    setNewPost({ company: "", user: "", role: "", text: "" });
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Company Reviews</h1>

        {/* POSTS */}
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <div style={styles.header}>
              <div style={styles.avatar}>
                {post.user?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 style={styles.company}>{post.company}</h2>
                <p style={styles.meta}>
                  {post.user} • {post.role}
                </p>
              </div>
            </div>

            <p style={styles.text}>{post.text}</p>

            <div style={styles.actions}>
              <button
                onClick={() => handleLike(post.id)}
                style={styles.btn}
              >
                👍 Like ({post.likes})
              </button>
              <button style={styles.btn}>
                💬 Comment ({post.comments})
              </button>
              <button style={styles.btn}>🔗 Share</button>
            </div>
          </div>
        ))}

        {/* CREATE POST (LinkedIn style) */}
        <div style={styles.createBox}>
          <h3>Share your experience</h3>

          <input
            placeholder="Company"
            value={newPost.company}
            onChange={(e) =>
              setNewPost({ ...newPost, company: e.target.value })
            }
            style={styles.input}
          />

          <input
            placeholder="Your Name"
            value={newPost.user}
            onChange={(e) =>
              setNewPost({ ...newPost, user: e.target.value })
            }
            style={styles.input}
          />

          <input
            placeholder="Role"
            value={newPost.role}
            onChange={(e) =>
              setNewPost({ ...newPost, role: e.target.value })
            }
            style={styles.input}
          />

          <textarea
            placeholder="Write your experience..."
            value={newPost.text}
            onChange={(e) =>
              setNewPost({ ...newPost, text: e.target.value })
            }
            style={styles.textarea}
          />

          <button onClick={addPost} style={styles.postBtn}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

/* STYLES (same LinkedIn layout) */

const styles = {
  page: {
    background: "#0b0f14",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
  },

  container: {
    maxWidth: "800px",
    margin: "auto",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "800",
  },

  post: {
    background: "#111",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "15px",
    border: "1px solid #222",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#06b6d4",
    color: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
  },

  company: {
    color: "#06b6d4",
    margin: 0,
  },

  meta: {
    fontSize: "12px",
    opacity: 0.6,
    margin: 0,
  },

  text: {
    marginTop: "10px",
    fontSize: "14px",
    lineHeight: "1.7",
    whiteSpace: "pre-line",
  },

  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },

  btn: {
    background: "transparent",
    border: "1px solid #333",
    color: "white",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },

  createBox: {
    marginTop: "25px",
    background: "#111",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #222",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0b0f14",
    color: "white",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0b0f14",
    color: "white",
  },

  postBtn: {
    marginTop: "10px",
    background: "#06b6d4",
    color: "#0b0f14",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    fontWeight: "700",
    cursor: "pointer",
  },
};