import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../Routes/Navigates";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ItemLaunchType } from "../../types/ItemLaunchType";

type PropsType = {
  oneLaunch: ItemLaunchType;
};

export const OneLaunch: React.FC<PropsType> = React.memo(
  ({ oneLaunch }) => {
    return (
      <NavLink to={PATH.LAUNCH_PAGE + `/${oneLaunch.id}`}>
        <Card sx={{}}>
          <CardMedia
            component="img"
            image={oneLaunch.image}
            alt="Random image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {oneLaunch.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {oneLaunch.status.description}
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    );
  }
);
