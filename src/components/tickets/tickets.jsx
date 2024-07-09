import { useState, useEffect } from "react";
import "./tickets.css";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {};

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleTickets = () => {};

  return (
    <div className="main-ticket-container">
      <form className="ticket-form">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your phone number" />
        <textarea placeholder="Enter your message" />
      </form>
    </div>
  );
};

export default Tickets;
