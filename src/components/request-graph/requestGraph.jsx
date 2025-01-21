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
import { Box, Typography, Card, CardContent } from "@mui/material";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import fetchRequestData from "./fetchRequestGraph";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 2, // Reduce padding for smaller screens
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
        width: "100%", // Ensure it takes full width of the parent
        maxWidth: "800px", // Constrain to a reasonable size for larger screens
        margin: "0 auto", // Center horizontally
        marginTop: 2,
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <Typography variant="h4" gutterBottom>
        Crafting Precision for Solar Success
      </Typography>
      {/* Total Requests */}
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Total Requests: {data.length}
      </Typography>

      {/* Chart Container */}
      <Card sx={{ width: "100%", maxWidth: 800, padding: 2 }}>
        <CardContent>
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
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "gray" }}
            >
              No data available to display
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

function RequestGraphWithErrorBoundary(props) {
  return (
    <ErrorBoundary
      fallbackComponent={
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            marginTop: 4,
          }}
        >
          Visual Graph is down...
        </Typography>
      }
    >
      <RequestGraph {...props} />
    </ErrorBoundary>
  );
}

export default RequestGraphWithErrorBoundary;
