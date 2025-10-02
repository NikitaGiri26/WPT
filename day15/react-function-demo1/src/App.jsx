import React from 'react'
import Header from './components/Header'
import UserCard from './components/UserCard'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  }

  const stats = [
    { label: 'Posts', value: 34 },
    { label: 'Followers', value: 128 },
    { label: 'Following', value: 76 }
  ]

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <Header username={user.name} />
      <UserCard user={user} />
      <Stats stats={stats} />
      <Footer />
    </div>
  )
}

export default App
