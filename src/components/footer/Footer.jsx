import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FF7043",
        padding: "0.3rem 0",
        height: "25px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: 2,
        bottom: 0, // Stick to the bottom of the page
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem", lg: "1rem" },
          color: "#000",
          textAlign: "center",
        }}
      >
        &copy; 2024 Terrific Every Design
      </Typography>
    </Box>
  );
};

export default Footer;
