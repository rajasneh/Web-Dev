import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket.jsx'
function App() {
  return (
    <>
     <Ticket ticket={[0,1,2]}/>
     <Ticket ticket={[0,1,2]}/>
     <Ticket ticket={[0,1,2]}/>
    </>
  )
}

export default App
