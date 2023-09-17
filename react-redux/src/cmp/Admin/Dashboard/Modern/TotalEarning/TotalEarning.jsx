import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";

const TotalEarning = ()=>{
  const design = (
    <>
      <Grid item xs={12} sm={4}>
      <Card>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Share</Button>
      </CardActions>
      </Card>
      </Grid>
    </>
  );
  return design;
}

export default TotalEarning;
