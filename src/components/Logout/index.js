import './index.css'

const Logout = props => {
  const {name, logout} = props
  return (
    <button className="logoutButtonStyle" type="button" onClick={logout}>
      {name}
    </button>
  )
}

export default Logout
