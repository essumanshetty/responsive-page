import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./Components/Header";
import LeftNav from "./Components/LeftNav";
import MainFeed from "./Components/MainFeed";
import RightChat from "./Components/RightChat";

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <Stack direction="row">
          <LeftNav />
          <MainFeed />
          <RightChat />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
