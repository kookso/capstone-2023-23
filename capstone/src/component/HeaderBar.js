import * as React from "react";
import { Box, Button, AppBar, Typography, Toolbar } from "@material-ui/core";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TemporaryDrawer from "./Drawer";
import { red } from "@mui/material/colors";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#94BDB0", height: "70px" }}
      >
        <Toolbar>
          <TemporaryDrawer></TemporaryDrawer>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: ".1rem",
            }}
          >
            초록이
          </Typography>
          <Button color="inherit">
            <AccountCircleIcon
              sx={{
                color: "white",
                fontSize: 50,
                align: "center",
                p: 0.5,
              }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
