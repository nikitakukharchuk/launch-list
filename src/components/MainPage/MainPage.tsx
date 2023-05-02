import { Button, Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../common/hooks/customHooks";
import { selectAllLaunch } from "../../store/selectors";
import { getAllLaunch } from "../../store/reducers/launchReducer";
import { OneLaunch } from "../OneLaunch/OneLaunch";
import { ItemLaunchType } from "../../types/ItemLaunchType";

export const MainPage = () => {
  const allLaunch = useAppSelector(selectAllLaunch);

  const dispatch = useAppDispatch();

  const updatePages = () => dispatch(getAllLaunch());

  return (
    <div>
      <Button
        variant="text"
        component="span"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onClick={updatePages}
      >
        Update Page
      </Button>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "center" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 22 }}
      >
        {allLaunch
          ? allLaunch.map((item: ItemLaunchType, index: number) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <OneLaunch oneLaunch={item} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};
