import React, { FC } from "react";
import {
  Toolbar,
  IconButton,
  Hidden,
  Divider,
  Typography,
  List,
  Grid,
  CircularProgress,
  Box,
  Card,
  Avatar,
} from "@mui/material";
import { EmployeeType } from "../enteties/entetiesEmloyees";

interface ItemProps {
  item: EmployeeType;
}

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <>
      <Card>
        <Avatar
          src={item.avatar}
          alt={item.name}
          sx={{ width: 45, height: 45 }}
        />
        <Typography component={"h3"} variant="h3">
          {item.name}
        </Typography>
        <Typography variant="subtitle1">{item.email}</Typography>
        <Typography variant="h3">{item.job}</Typography>
      </Card>
    </>
  );
};

export default Item;
