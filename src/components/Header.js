function Header({ changeMode, mode }) {
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{mode} Mode</button>
    </header>
  )
}

export default Header;