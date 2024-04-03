import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increseCount = () => {
    this.setState(prevState => {
      {
        return {count: prevState.count + 1}
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="headingStyle">
          The Button has been clicked <span className="spanStyle">{count}</span> times
        </h1>
        <p className="paraStyle">Click the button to increase the count!</p>
        <button onClick={this.increseCount} className="buttonStyle">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
