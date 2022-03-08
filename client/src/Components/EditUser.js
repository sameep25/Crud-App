import React, { useEffect } from "react";
import { useState } from "react";
import { editUser, getUsers } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";

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
});

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function EditUser() {
  const [userData, setUserData] = useState(initialValue);
  const { name, username, email, phone } = userData;
  const { id } = useParams();
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUserData(response.data);
  };

  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const editUserData = async () => {
    await editUser(id, userData);
    navigate("/allusers");
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

      <Button onClick={() => editUserData()}>Edit User</Button>
    </FormGroup>
  );
}
