import { useState } from "react";
import "./Lottery.css";
import { genTicket ,sum} from "./helper.js";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinner=sum(ticket)===15;

  let buyTicket=()=>{
    setTicket(genTicket(3));
  }
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br></br>
      <button onClick={buyTicket}>Buy new ticket</button>
      <h3>{isWinner && "Congratulations, you won!"}</h3>
    </div>
  );
}
