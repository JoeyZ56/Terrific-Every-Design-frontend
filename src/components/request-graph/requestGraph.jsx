import { useEffect, useState } from "react";
import "./requestGraph.css";

const RequestGraph = () => {
  const [data, setData] = useState([]);

  const fetchRequestData = async () => {
    try {
      const res = await fetch("");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching request data: ", error);
    }
  };

  useEffect(() => {
    fetchRequestData();
  }, []);

  return (
    <div className="main-container">
      <h1>Request Graph</h1>
      <div></div>
    </div>
  );
};

export default RequestGraph;
