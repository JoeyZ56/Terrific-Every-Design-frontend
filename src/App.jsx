import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import TicketForm from "./components/ticket-form/ticketForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticketform" element={<TicketForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
