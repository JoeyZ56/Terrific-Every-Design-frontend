import { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import fetchRequestData from "./fetchRequestGraph";
import "./requestGraph.css";

// Register the chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RequestGraph = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetchRequestData({ setData, setChartData });
  }, []);

  return (
    <div className="main-graph-container">
      <div className="number-of-requests">
        <h2>Total Requests: {data.length}</h2>
      </div>
      <div className="chart-container">
        {chartData.labels && chartData.labels.length > 0 ? (
          <Bar
            data={chartData}
            ref={(chartRef) => {
              if (chartRef && chartRef.chartInstance) {
                chartInstanceRef.current = chartRef.chartInstance;
              }
            }}
          />
        ) : (
          <h2 className="no-data-message">No data available to display</h2>
        )}
      </div>
    </div>
  );
};

function RequestGraphWithErrorBoundary(props) {
  return (
    <ErrorBoundary
      fallbackComponent={
        <h2 className="error-boundary-message">Visual Graph is down...</h2>
      }
    >
      <RequestGraph {...props} />
    </ErrorBoundary>
  );
}

export default RequestGraphWithErrorBoundary;
