import React from "react";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  formStyle: {
    margin: 20,
    padding: 20,
  },
  formStyle1: {
    padding: 2,
  },
});

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function AddUser() {
  const [userData, setUserData] = useState(initialValue);
  const { name, username, email, phone } = userData;
  const classes = useStyle();
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const addUserData = async () => {
    try {
      await addUser(userData);
      navigate("/allusers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormGroup className={classes.formStyle}>
      <FormControl sx={{ padding: 2 }}>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="name"
          value={name}
        ></Input>
      </FormControl>

      <FormControl sx={{ padding: 2 }}>
        <InputLabel>User-Name</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="username"
          value={username}
        ></Input>
      </FormControl>

      <FormControl sx={{ padding: 2 }}>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="email"
          value={email}
        ></Input>
      </FormControl>

      <FormControl sx={{ padding: 2 }}>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="phone"
          value={phone}
        ></Input>
      </FormControl>

      <Button onClick={() => addUserData()}>Add User</Button>
    </FormGroup>
  );
}
