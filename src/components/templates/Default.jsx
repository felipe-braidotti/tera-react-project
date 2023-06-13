import React, { useState } from "react";
import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";
import DrawerMenu from "../molecules/DrawerMenu";

export default function Default(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="wapper">
      <DrawerMenu />
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
}
