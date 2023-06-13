import React from "react";

import Drawer from "@mui/material/Drawer";

export default function DrawerMenu(props) {
  return (
    <Drawer anchor="right" open={props.open} onClose={() => console.log("ok")}>
      Menu
    </Drawer>
  );
}
