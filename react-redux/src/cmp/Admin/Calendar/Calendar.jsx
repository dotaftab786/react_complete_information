import {
  Card,
  CardContent,
  Button,
  ButtonGroup,
  Typography
} from "@mui/material";
import "./Calendar.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {
  useRef
} from "react";
const Calendar = ()=>{

  const todayDate = ()=>{
    const date  = new Date();
    let dd = date.getDate();
    let mm = date.toLocaleDateString('default',{month:'long'});
    let yy = date.getFullYear();
    return dd+" "+mm+" "+yy;
  }
  const cal = useRef();

  const next = ()=>{
    const calendar = cal.current.getApi();
    calendar.next();
  }

  const prev = ()=>{
    const calendar = cal.current.getApi();
    calendar.prev();
  }

  const today = ()=>{
    const calendar = cal.current.getApi();
    calendar.today();
  }

  const design = (
    <>
      <Card className="shadow-sm border">
        <CardContent className="p-0">
        <div className="d-flex justify-content-between align-items-center p-4">
        <ButtonGroup variant="outlined">
          <Button onClick={prev}>
            <span className="material-icons-outlined">arrow_left</span>
            Prev
          </Button>
          <Button onClick={next}>
           Next
            <span className="material-icons-outlined">arrow_right</span>
          </Button>
        </ButtonGroup>
        <Typography>
          {
            todayDate()
          }
        </Typography>
        <Button variant="outlined" onClick={today}>Today</Button>
        </div>

        <FullCalendar
          ref={cal}
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={
            [
              {
                 title: 'Birthday',
                 date: '2023-09-26',
                 color: 'red'
               },
              {
                title: 'Purchase Car',
                date: '2023-09-28',
                color: 'blue'
              }
            ]
          }
          headerToolbar={
            {
              start: "",
              center: "",
              end: ""
            }
          }
          eventDisplay="list-item"
        />
        </CardContent>
      </Card>
    </>
  );
  return design;
}

export default Calendar;
