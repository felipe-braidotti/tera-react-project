import React from "react";
import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";

export default function Default(props) {
  return (
    <div className="wapper">
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
}
