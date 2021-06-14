import React from 'react'
import UserCard from '../../components/UserCard'

export default function UserCardPage(props) {
  return (
    <section>
      <h1>Users page</h1>
      <UserCard {...props}/>
    </section>
  )
}
