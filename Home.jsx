
import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#fff7ed', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#d97706' }}>ZaykaFast</h1>
      <p style={{ fontSize: '1.2rem', color: '#444' }}>Swad bhi, Speed bhi 🍽️</p>
      <input placeholder="Search for food..." style={{ padding: '10px', width: '300px', borderRadius: '20px', marginTop: '1rem' }} />
    </div>
  );
}
