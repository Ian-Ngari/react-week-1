import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div style={{ padding: '40px' }}>
 <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Welcome to Sky
Academy</h1>
 <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
 Empowering learners for a better future through quality education and holistic
development.
 </p>
 <div style={{ marginTop: '30px' }}>
 <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Our Mission</h2>
 <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
 At Sky Academy, we are committed to nurturing young minds, fostering creativity,
and building confident individuals prepared to shape tomorrow's world.
 </p>
 </div>
 <div style={{ marginTop: '30px' }}>
 <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Why Choose Us</h2>
 <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px' }}>
 <li>✅ Experienced and passionate educators</li>
 <li>✅ Innovative teaching methods</li>
 <li>✅ Modern learning facilities</li>
 <li>✅ Wide range of co-curricular activities</li>
 <li>✅ Safe and inclusive environment</li>
 </ul>
 </div>
 <div style={{ marginTop: '30px', textAlign: 'center' }}>
 <Link to="/courses" style={{ textDecoration: 'none' }}>
 <button
 style={{
 padding: '12px 25px',
 backgroundColor: '#003366',
 color: '#fff',
 border: 'none',
 borderRadius: '5px',
 fontSize: '16px',
 cursor: 'pointer',
 marginTop: '20px'
 }}
 >
 Explore Our Courses
 </button>
 </Link>
 </div>
 </div>
  )
}

export default Home