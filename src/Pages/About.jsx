import React from 'react'

function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8'
    }}>
     <h1 style={{ fontSize: '36px', color: '#003366', marginBottom: '20px' }}>About Sky
    Academy</h1>
     <p style={{ fontSize: '18px', marginBottom: '20px' }}>
     Sky Academy is a place of academic excellence and holistic development. Our
    mission is to empower students with knowledge, character, and leadership skills that will
    prepare them for a bright future.
     </p>
     <p style={{ fontSize: '18px', marginBottom: '20px' }}>
     At Sky Academy, we believe in nurturing every child’s potential through
    personalized learning, modern technology, and a supportive environment. Our dedicated
    educators ensure that each learner grows not just academically, but also socially and
    emotionally.
     </p>
     <ul style={{ paddingLeft: '20px', fontSize: '18px', listStyleType: 'none'}}>
     <li style={{textDecoration: 'none'}}>➤ Experienced and passionate teachers</li>
     <li style={{textDecoration: 'none'}}>➤ State-of-the-art learning facilities</li>
     <li style={{textDecoration: 'none'}}>➤ Strong emphasis on discipline and
    values</li>
     <li style={{textDecoration: 'none'}}>➤ Diverse extracurricular activities</li>
     <li style={{textDecoration: 'none'}}>➤ Supportive and inclusive learning
    environment</li>
     </ul>
     </div>
  )
}

export default About