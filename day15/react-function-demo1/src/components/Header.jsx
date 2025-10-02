import React from 'react'

function Header({ username }) {
  return (
    <header style={{ background: '#282c34', color: 'white', padding: '1rem' }}>
      <h1>User Dashboard</h1>
      <p>Hello, {username} 👋</p>
    </header>
  )
}

export default Header
