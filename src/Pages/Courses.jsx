import React from "react";
import { Link, Outlet} from 'react-router-dom';

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  width: "280px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  transition: "transform 0.2s ease",
};

function courses() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f4f4" }}>
      <h1
        style={{
          fontSize: "36px",
          color: "#003366",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Courses Offered at Sky Academy
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <Link to ="Mathematics" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Mathematics</h3>
          <p>Sharpen your logical reasoning and problem-solving skills.</p>
        </Link>
        <Link style={cardStyle}>
          <h3 style={{ color: "#003366" }}>English Language</h3>
          <p>Develop reading, writing, speaking, and listening skills.</p>
        </Link>
        <Link to= "Science" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Science & Technology</h3>
          <p>Explore scientific innovations and hands-on experiments.</p>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <Link to ="ComputerScience" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Computer Science</h3>
          <p>Learn coding, web development, and digital literacy.</p>
        </Link>
        <Link to ="Business" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Business Studies</h3>
          <p>Master entrepreneurship, marketing, and leadership.</p>
        </Link>
        <Link to ="Arts" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Arts & Design</h3>
          <p>Unleash your creativity through visual and performing arts.</p>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Link to ="History" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>History & Geography</h3>
          <p>Understand world events and explore global cultures.</p>
        </Link>
        <Link to="Civic" style={cardStyle}>
          <h3 style={{ color: "#003366" }}>Civic Education</h3>
          <p>Learn about rights, responsibilities, and citizenship.</p>
        </Link>
        <Link to="religious" style={cardStyle}>

          <h3 style={{ color: "#003366" }}>Religious Studies</h3>
          <p>Gain moral values and spiritual understanding.</p>
        </Link>
      </div>
      
    <Outlet/>
    </div>
  );
}

export default courses;
