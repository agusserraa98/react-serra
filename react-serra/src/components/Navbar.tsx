import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
        <AnchorIcon></AnchorIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          El Ancla store
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">SOBRE NOSOTROS</Button>
          <Button color="inherit" id="resources-button">
            Resources
          </Button>
          <Button color="inherit">MI CUENTA</Button>
          <Button color="inherit">MI CARRITO</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
