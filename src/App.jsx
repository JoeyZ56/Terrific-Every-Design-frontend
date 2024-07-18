import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import RequestForm from "./components/request-form/requestForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requestform" element={<RequestForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
