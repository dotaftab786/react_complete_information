import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";
import Chart from "react-apexcharts";
import {
  useState
} from "react";
const Revenue = ()=>{
  const[series,setSeries] = useState([
    {
      name:"Profit",
      data: [10,15,60,30]
    },
    {
      name: "Loss",
      data: [4,40,10,30]
    }
  ])
  const[options,setOptions] = useState({
    xaxis:{
      categories: [
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString()
      ]
    },
    theme:{
      mode: "light",
      palette: "palette2"
    },
    legend:{
      fontSize: 20,
      fontWeight: "bold",
      position: "bottom",
      horizontalAlign: "center"
    },
    chart:{
      toolbar:{
        show: true,
        tools: {
          download: false,
          zoom: false
        }
      },
      background: "#f5f5f5",
      animations: {
        speed: 5000,
        easing: "easeinout"
      }
    }
  })
  const design = (
    <>
      <Grid item xs={12} sm={6}>
      <Card>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Revenue Updates
      </Typography>
      <Chart
        options={options}
        series={series}
        type="line"
        height="350px"
      >
      </Chart>
      </CardContent>

      </Card>
      </Grid>
    </>
  );
  return design;
}

export default Revenue;
