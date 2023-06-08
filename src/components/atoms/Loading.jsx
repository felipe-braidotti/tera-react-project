import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div class="center">
      <CircularProgress color="inherit" size={50} />
    </div>
  );
}
