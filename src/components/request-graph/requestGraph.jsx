import { useEffect, useState } from "react";
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
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchRequestData({ setData, setChartData });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
        width: {
          xs: "95%", // 95% width on extra-small screens (mobile)
          sm: "85%", // 85% width on small screens (tablets)
          md: "70%", // 70% width on medium screens (laptops)
        },
        maxWidth: "800px",
        height: "100%",
        maxHeight: "800px",
        margin: "0 auto",
        marginTop: 2,
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        >
          Crafting Precision for Solar Success
        </Typography>
        {/* Total Requests */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.5rem",
            },
          }}
        >
          Total Requests: {data.length}
        </Typography>
      </Box>

      {/* Show CircularProgress while loading */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            width: "100%",
            maxWidth: 800,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              width: {
                xs: "90%",
                sm: "90%",
                md: "100%",
              },
              height: "auto", // Let content define the height
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {chartData.labels && chartData.labels.length > 0 ? (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 700,
                  height: {
                    xs: "350px", // Taller chart for mobile
                    sm: "400px", // Slightly taller chart for tablets
                    md: "450px", // Default chart height for larger screens
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Bar
                  data={chartData}
                  options={{
                    maintainAspectRatio: false, // Allows full control over chart height
                    responsive: true,
                  }}
                  style={{
                    width: "100%",
                    height: "100%", // Ensures chart fills the Box
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
            ) : (
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                No data available to display
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
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
