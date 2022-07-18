import ReactDOM from 'react-dom'
import Ticket from './pages/Ticket'

function App() {
    return (
        <div className="ticket-container bg-lightblue">
            <Ticket />
        </div>
    )
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'))
}
