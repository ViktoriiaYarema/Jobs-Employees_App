import React, { FC } from "react";
import { Typography, Grid, Box, Card, Avatar } from "@mui/material";
import { EmployeeType } from "../enteties/entetiesEmloyees";

interface ItemProps {
  item: EmployeeType;
  onClick: () => void;
}

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Item: FC<ItemProps> = ({ item, onClick }) => {
  return (
    <>
      <Card
        sx={{
          padding: 1.5,
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onClick={onClick}
      >
        <Grid container spacing={0.5} direction="column" flexGrow={1}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Avatar
              alt={item.name}
              sx={{ width: 45, height: 45 }}
              {...stringAvatar(item.name)}
            />
            <Box component={"div"} sx={{ marginLeft: 2 }}>
              <Typography component={"h3"} variant="subtitle2">
                {item.name}{" "}
              </Typography>
              <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                {item.email}
              </Typography>
            </Box>
          </Grid>

          <Typography
            data-cy='job-name'
            variant="subtitle2"
            align="center"
            sx={{
              fontWeight: 600,
              display: "flex",
              flexGrow: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {" "}
            {item.job}
          </Typography>
        </Grid>
      </Card>
    </>
  );
};

export default Item;
