import './index.css'

const Message = props => {
  const {message} = props
  const displayMessage = message ? 'Welcome User' : 'Please Login'
  return <h1 className="styleMessage">{displayMessage}</h1>
}

export default Message
