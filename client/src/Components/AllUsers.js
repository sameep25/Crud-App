import React, { useEffect, useState } from "react";
import { getUsers, deleteUserdb } from "../Service/api";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyle = makeStyles({
  table: {
    width: "70%",
    borderTop: "1px solid white",
  },
  tableHead: {
    backgroundColor: "#333333",
  },
});

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteUser = async (id) => {
    await deleteUserdb(id);
    getAllUsers();
  };

  return (
    <Table className={classes.table}>
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell sx={{ color: "#ffffff" }}>S.No</TableCell>
          <TableCell sx={{ color: "#ffffff" }}>Name</TableCell>
          <TableCell sx={{ color: "#ffffff" }}>UserName</TableCell>
          <TableCell sx={{ color: "#ffffff" }}>Email</TableCell>
          <TableCell sx={{ color: "#ffffff" }}>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users &&
          users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{index+1}.</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button onClick={() => edit(user._id)}>Edit</Button>
                <Button onClick={() => deleteUser(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
