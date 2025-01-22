import { motion } from "framer-motion";
import { Box, Typography, Link, Grid } from "@mui/material";
import email from "../../assets/contactImages/googleemail.svg";
import mobile from "../../assets/contactImages/googlephone.svg";

const Contact = () => {
  return (
    <Box
      id="contact"
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
          md: "90%", // 70% width on medium screens (laptops)
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
      {/* Contact Text Section */}
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
          Get started on crafting your solar dreams today!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.8rem",
            },
          }}
        >
          Call or email us to get a quote!
        </Typography>
      </Box>

      {/* Links Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Email Link */}
        <Grid item xs={12} sm={6} md={4}>
          <Link
            href="mailto:terrificeverydesign@gmail.com"
            underline="none"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: "#FF7043",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={email}
                alt="email"
                style={{ width: "50px", marginBottom: "1rem" }}
              />
              <Typography variant="body1">
                terrificeverydesign@gmail.com
              </Typography>
            </motion.div>
          </Link>
        </Grid>

        {/* Phone Link */}
        <Grid item xs={12} sm={6} md={4}>
          <Link
            href="tel:+15302282523"
            underline="none"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: "#FF7043",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={mobile}
                alt="mobile"
                style={{ width: "50px", marginBottom: "1rem" }}
              />
              <Typography variant="body1">+1 (530) 228-2523</Typography>
            </motion.div>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
