import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import images from "../src/assests/setup-analytics-concept-illustration_114360-2595.avif";
import "./App.css";
import Footer from "./Footer";
import PricingSection from "./PricingSection";
import TrySection from "./TrySection";

import FoundationIcon from "@mui/icons-material/Foundation";
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a2b56",
  color: "#fff",
  padding: theme.spacing(8, 0),
  textAlign: "center",
  position: "relative",
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
}));

const NavbarButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  textTransform: "none",
  fontWeight: "bold",
  margin: theme.spacing(0, 2),
  "&:hover": {
    backgroundColor: "transparent",
    color: "#ffd700",
  },
}));

const AppBarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#1a2b56",
  boxShadow: "none",
}));
const Navbar = () => {
  return (
    <AppBarContainer position="sticky">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
          <FoundationIcon /> Whitespace
        </Typography>

        <NavbarButton>Products</NavbarButton>

        <NavbarButton>Resources</NavbarButton>

        <NavbarButton onClick={(e) => ""}>Pricing</NavbarButton>

        <NavbarButton style={{ backgroundColor: "#f9e47e" }}>
          Login
        </NavbarButton>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976D2",
            color: "#fff",
            "&:hover": { backgroundColor: "#1565C0" },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Try Whitespace Free
        </Button>
      </Toolbar>
      <Box
        sx={{
          mt: 1,
          pt: 1,
          borderTop: "1px solid #1976D2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          px: 2,
        }}
      >
        {" "}
      </Box>
    </AppBarContainer>
  );
};

const HeroImage = () => (
  <Grid container justifyContent="center" spacing={4}>
    <Grid item xs={12} sm={6}>
      <img
        src={images}
        alt="Illustration"
        style={{
          width: "100%",
          height: "auto",
          padding:10,
          objectFit: "contain",
        }}
      />
    </Grid>
    <Grid
      item
      xs={12}
      sm={6}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <HeroText variant="h2">Get More Done with Whitespace</HeroText>
      <SubText variant="h6">
        Project management software that enables your teams to collaborate,
        plan, analyze, and manage everyday tasks
      </SubText>
      <Button
        variant="contained"
        sx={{
          mx: 6,
          backgroundColor: "#1976D2",
          color: "#fff",
          "&:hover": { backgroundColor: "#1565C0" },
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Try Whitespace Free
      </Button>
    </Grid>
  </Grid>
);

function App() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <HeroImage />
      </HeroSection>
      <Box>
        <PricingSection />
        <TrySection />
        <Footer />
      </Box>
    </>
  );
}

export default App;
