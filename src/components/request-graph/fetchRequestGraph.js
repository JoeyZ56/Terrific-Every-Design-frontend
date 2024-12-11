const fetchRequestData = async ({ setChartData, setData }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    return console.error("Error getting API URL from .env");
  }

  try {
    console.log("apiKey:", JSON.stringify(apiKey));
    const res = await fetch(`${apiKey}/requests/get-requests`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    setData(data);
    console.log("Fetched data: ", data);

    if (!data || data.length === 0) {
      console.warn("No data available to process");
      return;
    }

    // Process the data to create chart data
    const dates = data
      .map((request) => {
        if (!request.createdAt) {
          console.warn("Request missing createdAt date: ", request);
          return null;
        }
        const date = new Date(request.createdAt);
        if (isNaN(date.getTime())) {
          console.warn("Invalid date format: ", request.createdAt);
          return null;
        }
        return date.toLocaleDateString();
      })
      .filter((date) => date !== null);

    if (dates.length === 0) {
      console.warn("No valid dates found in data");
      return;
    }

    const dateCounts = dates.reduce((acc, date) => {
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(dateCounts);
    const counts = Object.values(dateCounts);

    setChartData({
      labels,
      datasets: [
        {
          label: "Requests",
          data: counts,
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

export default fetchRequestData;
