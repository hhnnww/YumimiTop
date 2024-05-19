import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
} from "@mui/material";

export default function Component() {
  return (
    <>
      <Container sx={{ py: 3, maxWidth: ["100%"] }}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Card variant="outlined" sx={{ minWidth: ["100%", "600px"] }}>
            <CardActionArea sx={{ borderRadius: 0 }}>
              <Box p={3}>THIS IS IMAGE</Box>
            </CardActionArea>
            <CardHeader title="Register" subheader="register to yummitop" />

            <CardContent>
              <Stack direction={"column"} spacing={2}>
                <TextField fullWidth label="username" />
                <TextField label="password" />
              </Stack>
            </CardContent>
            <CardActions>
              <Button color="inherit" variant="text">
                back home
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
