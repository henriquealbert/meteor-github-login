import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { LoginWithGithub } from './LoginWithGithub.jsx'

export const App = () => {
  const user = useTracker(() => Meteor.user())
  const handleLogout = () => Meteor.logout()

  return (
    <div>
      <h1>Meteor Login With Github</h1>

      {user ? (
        <div>
          <p>Logged in as: {user.services.github.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginWithGithub />
      )}
    </div>
  )
}
