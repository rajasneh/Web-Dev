import { useState } from "react";
import { genTicket ,sum} from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3,winCondition}) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinner=winCondition(ticket);

  let buyTicket=()=>{
    setTicket(genTicket(n));
  }
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy new ticket</button>
      <h3>{isWinner && "Congratulations, you won!"}</h3>
    </div>
  );
}
