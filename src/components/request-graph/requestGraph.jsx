import { useEffect, useState } from "react";
import { bar } from "react-chartjs-2";
import "./requestGraph.css";

const RequestGraph = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  const fetchRequestData = async () => {
    try {
      const res = await fetch("http://localhost:5000/requests");
      const data = await res.json();
      setData(data);
      console.log(data);

      //process data to create a chart data object
      const dates = data.map((request) => request.createdAt);
      const dateCounts = dates.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(dateCounts);
      const counts = Object.value(dateCounts);

      setChartData({
        labels,
        datasets: [
          {
            label: "Requests",
            data: Object.values(dateCounts),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
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
      <div>
        <h2>{data.length}</h2>
      </div>
    </div>
  );
};

export default RequestGraph;
