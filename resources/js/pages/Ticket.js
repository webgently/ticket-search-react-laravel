import React from 'react'
import ReactDOM from 'react-dom'

function Ticket() {
    return <div className="container">Hello, How are you?</div>
}

export default Ticket

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'))
}
