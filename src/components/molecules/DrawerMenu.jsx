import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material/Drawer";

import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function DrawerMenu(props) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/post`}>Criar Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
