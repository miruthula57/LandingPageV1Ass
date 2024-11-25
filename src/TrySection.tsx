import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import EastIcon from "@mui/icons-material/East";
import GridViewIcon from "@mui/icons-material/GridView";
import { Box, Button, Grid, Typography } from "@mui/material";
const TrySection = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#002855",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Try Whitepace
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        today
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Get started for free.
        <br /> Add your whole team as your needs grow.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#007bff",
          "&:hover": { backgroundColor: "#0056b3" },
          mb: 3,
        }}
        endIcon={<EastIcon />}
      >
        Try Today Free
      </Button>
      <Typography variant="body1" sx={{ mb: 4 }}>
        On a Big Team ?Contact Sales.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <AppleIcon fontSize="large" />
        </Grid>
        <Grid item>
          <GridViewIcon fontSize="large" />
        </Grid>
        <Grid item>
          <AndroidIcon fontSize="large" />
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 4,
          pt: 2,
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
    </Box>
  );
};

export default TrySection;
