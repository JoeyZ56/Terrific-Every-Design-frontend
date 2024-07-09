import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <h2>Have an idea? Share it here!</h2>
      <form className="ticket-form">
        <input
          type="text"
          placeholder="Enter your name"
          className="ticket-input"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="ticket-input"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          className="ticket-input"
        />
        <textarea
          placeholder="Enter your message"
          className="ticket-text-area"
        />
        <button className="ticket-button">Submit Ticket</button>
      </form>
    </div>
  );
};

export default Tickets;
