import { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import fetchRequestData from "./fetchRequestGraph";
import "./requestGraph.css";

const RequestGraph = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetchRequestData({ setData, setChartData });

    return () => {
      // Cleanup chart instance to avoid the error
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="main-container">
      <h1>Request Graph</h1>
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
