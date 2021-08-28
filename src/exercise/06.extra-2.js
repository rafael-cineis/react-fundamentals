// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }

  const handleChange = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case only')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} />
        {error && (
          <div role="alert" style={{color: 'red'}}>
            {error}
          </div>
        )}
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
