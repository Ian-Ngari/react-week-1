import React from 'react'

function Contact() {
  return (
    
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', color: '#003366', marginBottom:
       '30px' }}>
        Contact Us
        </h1>
        <div
        style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        >
        <form>
        <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
        Full Name:
        </label>
        <input
        type="text"
        placeholder="Enter your full name"
        style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        }}
        />
        </div>
        <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
        Email Address:
        </label>
        <input
        type="email"
        placeholder="Enter your email"
        style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        }}
        />
        </div>
        <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
        Message:
        </label>
        <textarea
        rows="5"
        placeholder="Write your message here..."
        style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        }}
        ></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
        <button
        type="submit"
        style={{
        backgroundColor: '#003366',
        color: 'white',
        padding: '12px 25px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        }}
        >
        Submit Message
        </button>
        </div>
        </form>
        </div>
        </div>
  )
}

export default Contact