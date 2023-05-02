import { NavLink, useParams } from "react-router-dom";
import { selectAllLaunch } from "../../store/selectors";
import { useAppSelector } from "../../common/hooks/customHooks";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ItemLaunchType } from "../../types/ItemLaunchType";

export const DetailPage = () => {
  const launch = useAppSelector(selectAllLaunch);

  const { id } = useParams<{ id: string }>();

  let launchElement = {
    id: "",
    name: "",
    image: "",
    status: {
      description:'',
      name:''
    },
    rocket:{
      configuration: {
        name: ''
      }
    }
  };
  if (id) {
    const el = launch.find((n: ItemLaunchType) => n.id === id);
    if (el) launchElement = el;
  }

  return (
    <>
      {launchElement && (
        <div className="mx-10 my-5">
          <NavLink to={"/"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f44336",
                color: "white",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
                marginBottom: '1rem'
              }}
            >
              Back to Home Page
            </Button>
          </NavLink>
          <Card sx={{ }}>
          <CardMedia
            component="img"
            image={launchElement.image}
            alt="Random image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {launchElement.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {launchElement.status.description}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Rocket Name : {launchElement.rocket.configuration.name}
            </Typography>
            <Typography variant="body1" color={`${launchElement.status.name === 'Launch Successful' ? 'green' : 'red'}`}>
              Status : {launchElement.status.name}
            </Typography>
          </CardContent>
        </Card>
        </div>
      )}
    </>
  );
};
