import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import FoundationIcon from "@mui/icons-material/Foundation";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#002855", color: "#fff", pt: 6, pb: 6, px: 15 }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            <FoundationIcon /> Your Logo
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            A brief description of the company or service offered. This section
            provides insights about your brand or mission.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Company
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem disableGutters>
              <ListItemText primary="About Us" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Careers" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Contact" sx={{ color: "#fff" }} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Resources
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem disableGutters>
              <ListItemText primary="Help Center" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Privacy Policy" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Terms of Service" sx={{ color: "#fff" }} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Explore
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem disableGutters>
              <ListItemText primary="Blog" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Features" sx={{ color: "#fff" }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Partners" sx={{ color: "#fff" }} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Stay Connected
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
        Get started for free.
        <br /> Add your whole team as your needs grow.
      </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976D2",
              color: "#fff",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
           Start Today
          </Button>
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
          color: "#fff",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            defaultValue="en"
            size="small"
            sx={{
              backgroundColor: "transparent",
              color: "#1976D2",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
          </Select>
          <Typography sx={{ mx: 2, color: "#ffff" }}>Terms & Privacy</Typography>
          <Typography sx={{ mx: 2, color: "#ffff" }}>Status</Typography>
          <Typography sx={{ mx: 2, color: "#ffff" }}>Security</Typography>
          <Typography sx={{ mx: 2, color: "#ffff" }}>@2021 Whitpace LLC</Typography>
        </Box>
        <Box>
          <IconButton sx={{ color: "#1976D2", mx: 0.5 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#1976D2", mx: 0.5 }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#1976D2", mx: 0.5 }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#1976D2", mx: 0.5 }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
