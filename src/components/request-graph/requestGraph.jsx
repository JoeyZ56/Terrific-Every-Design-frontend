import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import "./requestGraph.css";

const RequestGraph = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  const fetchRequestData = async () => {
    try {
      const res = await fetch("http://localhost:5000/get-requests");
      const data = await res.json();
      setData(data);
      console.log(data);

      //process data to create a chart data object
      const dates = data
        .map((request) => request.createdAt)
        .toLoaclDateString();
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
      console.log("Error fetching request data: ", error);
    }
  };

  useEffect(() => {
    fetchRequestData();
  }, []);

  return (
    <div className="main-container">
      <h1>Request Graph</h1>
      <div className="number-of-requests">
        <h2>Total Requests: {data.length}</h2>
      </div>
      <div>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

function RequestGraphWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      errorComponent={<h2>Visual Graph is down...</h2>}
      <RequestGraph {...props} />
    </ErrorBoundary>
  );
}

export default RequestGraphWithErrorBoundary;
