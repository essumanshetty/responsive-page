import React from "react";
import { Box, Typography, styled, Stack, AvatarGroup } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Conversation from './Conversation'
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: "#c9c6b0",
}));

const Img = styled("img")(({ theme }) => ({
  width: "100px",
  height: "100px",
  margin: "8px ",
}));

function RightChat() {
  return (
    <Box
      flex={2}
      sx={{ margin: "10px 0 10px 10px", display: { xs: "none",sm: 'none', md: "block" } }}
    >
      <Heading>Online friends</Heading>
      <Stack direction="row">
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Stack>
      <Box sx={{ marginTop: "10px" }}>
        <Heading>Latest photos</Heading>
        <Stack direction="row">
          <Img
            src="https://images.unsplash.com/photo-1643700122522-8dcef7fb258b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385"
            alt="img1"
          />

          <Img
            src="https://images.unsplash.com/photo-1653408400816-af6dba0c9432?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
            alt="img2"
          />

          <Img
            src="https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
            alt="img3"
          />
        </Stack>
      </Box>
      <Box sx={{marginTop: '10px'}}>
      <Heading>Latest Converations</Heading>
        <Conversation/>
      </Box>
    </Box>
  );
}

export default RightChat;
