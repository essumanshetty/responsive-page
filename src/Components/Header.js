import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Stack,
  styled,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const CustomBadge = styled(Badge)(({ theme }) => ({
  width: 24,
  height: 24,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CustomSearch = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 5px",
  border: "none",
  borderRadius: "3px",
  width: "40%",
}));

const CustomAgriIcon = styled(AgricultureIcon)(({ theme }) => ({
  verticalAlign: "bottom",
  fontSize: "2.2rem",
  marginRight: "8px",
}));

function Header() {
  return (
    <Box>
      <AppBar position="sticky">
        <CustomToolbar>
          <Stack direction="row">
            <CustomAgriIcon />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Agri
            </Typography>
          </Stack>

          <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
            <CustomSearch placeholder="Search...." />
          </Box>

          <Stack direction="row" gap={3}>
            <CustomBadge badgeContent={4} color="error">
              <MailIcon />
            </CustomBadge>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 24, height: 24 }}
            />
          </Stack>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
