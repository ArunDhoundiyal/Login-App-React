import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {condition: false}

  onClickButton = () => {
    this.setState(prevState => ({condition: !prevState.condition}))
  }

  render() {
    const {condition} = this.state
    return (
      <div className="bg-container">
        <Message message={condition} />

        {condition ? (
          <Logout name="Logout" logout={this.onClickButton} />
        ) : (
          <Login name="Login" login={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
