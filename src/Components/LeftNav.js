import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import {HomeIcon, GroupsIcon, ArticleIcon, StorefrontIcon, PersonIcon, SettingsIcon, AssignmentIndIcon} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const leftNavAr = [
  { icon: <HomeIcon />, text: "Homepage" },
  { icon: <ArticleIcon />, text: "Pages" },
  { icon: <GroupsIcon />, text: "Groups" },
  { icon: <StorefrontIcon />, text: "Marketplace" },
  { icon: <PersonIcon />, text: "Friends" },
  { icon: <SettingsIcon />, text: "Settings" },
  { icon: <AssignmentIndIcon />, text: "Profile" },
];

function LeftNav() {
  return (
    <Box flex={1} sx={{ display: { xs: "none",sm: 'block', md: "block" } }}>
      <List>
        {leftNavAr.map((nav) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LeftNav;
