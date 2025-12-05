import './App.css'

function Header({ firstName, lastName }) {
  return (
    <header>
      <h1>こんにちは、{lastName} {firstName} さん！</h1>
    </header>
  )
}

export default Header
