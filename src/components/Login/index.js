import './index.css'

const Login = props => {
  const {name, login} = props
  return (
    <button className="LoginButtonStyle" type="button" onClick={login}>
      {name}
    </button>
  )
}

export default Login
