import React from 'react'

function Stats({ stats }) {
  return (
    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
      {stats.map((stat, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <h3>{stat.label}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats
