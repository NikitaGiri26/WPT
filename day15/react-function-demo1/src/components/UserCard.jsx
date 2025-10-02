import React from 'react'

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      {/* <img src={user.avatar} alt="User Avatar" width="100" /> */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard
