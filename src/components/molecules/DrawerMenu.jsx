import React from "react";

import Drawer from "@mui/material/Drawer";

export default function DrawerMenu() {
  return (
    <Drawer anchor="right" open={true} onClose={() => console.log("ok")}>
      Menu
    </Drawer>
  );
}
