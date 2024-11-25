import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const plans = [
  {
    title: "Free",
    price: "$0",
    message: "bmxznbc nbmnxc df",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max note size",
      "Customize home dashboard and access extra widgets",
      "Convert primary Google Calendar account",
    ],
    buttonText: "Get Started",
    backgroundColor: "#f8f9fa",
    buttonColor: "#ffffff", // White button for Free plan
    textColor: "#343a40",
  },
  {
    title: "Personal",
    price: "$11.99",
    message: "bmxznbc nbmnxc df",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max note size",
      "Customize home dashboard and access extra widgets",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    backgroundColor: "#002855",
    buttonColor: "#0056b3", // Blue button for Personal plan
    textColor: "#ffff",
    isHighlighted: true,
  },
  {
    title: "Organization",
    price: "$49.99",
    message: "bmxznbc nbmnxc df",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max note size",
      "Customize home dashboard and access extra widgets",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    backgroundColor: "#f8f9fa",
    buttonColor: "#ffffff", // White button for Organization plan
    textColor: "#343a40",
  },
];

const PricingSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f8fafc", py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: "bold", color: "#212529" }}
      >
        Choose Your Plan
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4, color: "#6c757d" }}
      >
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, <br />
        there's a plan for you.
      </Typography>
      <Grid container spacing={0} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 350,
                minHeight: plan.isHighlighted ? 500 : 480,
                borderRadius: 4,
                backgroundColor: plan.backgroundColor,
                boxShadow: plan.isHighlighted
                  ? "0px 4px 16px rgba(0, 123, 255, 0.4)"
                  : "0px 2px 8px rgba(0, 0, 0, 0.1)",
                transform: plan.isHighlighted ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
                my: 10,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  paddingLeft: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: plan.textColor,
                    textAlign: "left",
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: plan.textColor,
                    textAlign: "left",
                  }}
                >
                  {plan.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: plan.textColor,
                    textAlign: "left",
                  }}
                >
                  {plan.message}
                </Typography>
                <List sx={{ p: 0 }}>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} sx={{ px: 0, py: 0.75 }}>
                      <ListItemIcon
                        sx={{
                          color: plan.textColor,
                          minWidth: 30,
                        }}
                      >
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: plan.textColor,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    px: 6,
                    py: 1.5,
                    fontSize: "1rem",
                    backgroundColor: plan.buttonColor,
                    color: plan.buttonColor === "#ffffff" ? "#343a40" : "#fff", // Ensure the text color is visible for white button
                    "&:hover": {
                      backgroundColor: plan.isHighlighted
                        ? "#003f88"
                        : plan.buttonColor === "#ffffff"
                        ? "#f8f9fa" // Hover color for white button
                        : "#0056b3",
                    },
                    alignSelf: "flex-start",
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingSection;
