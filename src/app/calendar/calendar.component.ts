import { Component, OnInit, ViewChild } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { Events, CalendarService } from "./calendar.service";
import swal from "sweetalert2";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: "calendar-cmp",
  templateUrl: "calendar.component.html",
  providers: [CalendarService],
})
export class CalendarComponent implements OnInit {
  constructor(private calendarService: CalendarService) {}
  @ViewChild("fullcalendar") fullcalendar: FullCalendarComponent;
  events;

  calendarOptions: CalendarOptions;
  userEvents: Events | undefined;

  events_constants = [
    "event-azure",
    "event-orange",
    "event-red",
    "event-green",
    "event-default",
  ];

  async showEvents() {
    try {
      const data = await this.calendarService.getUser().toPromise();
      const today = new Date();
      const y = today.getFullYear();
      const m = today.getMonth();
      const d = today.getDate();
      const evt = [];
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        evt.push({
          title: `${data[i].firstName} ${data[i].lastName}`,
          start: new Date(data[i].date),
          className:
            this.events_constants[
              Math.floor(Math.random() * this.events_constants.length)
            ],
        });
        console.log(evt);
      }
      console.log("MAP");
      this.events = [...evt];
      this.calendarOptions = {
        headerToolbar: {
          right: "prev,next today",
          center: "dayGridMonth,timeGridWeek,timeGridDay",
          left: "title",
        },
        initialView: "dayGridMonth", // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        droppable: true,
        displayEventTime: true,
        views: {
          month: {
            titleFormat: { month: "long", year: "numeric" },
          },
          agendaWeek: {
            titleFormat: { month: "long", year: "numeric", day: "numeric" },
          },
          agendaDay: {
            titleFormat: { month: "short", year: "numeric", day: "numeric" },
          },
        },
        events: this.events,
        dateClick: this.addEvent.bind(this),
        eventClick: this.showEvent.bind(this),
      };
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

  async ngOnInit(): Promise<void> {
    await this.showEvents();

    // this.events = [
    //   {
    //     title: "All Day Event",
    //     start: new Date(2023, 5, 1),
    //     className: "event-default",
    //   },
    // ];

    //   {
    //     id: 999,
    //     title: "Repeating Event",
    //     start: new Date(y, m, d + 3, 6, 0),
    //     allDay: false,
    //     className: "event-rose",
    //   },
    //   {
    //     title: "Meeting",
    //     start: new Date(y, m, d - 1, 10, 30),
    //     allDay: false,
    //     className: "event-green",
    //   },
    //   {
    //     title: "Lunch",
    //     start: new Date(y, m, d + 7, 12, 0),
    //     end: new Date(y, m, d + 7, 14, 0),
    //     allDay: false,
    //     className: "event-red",
    //   },
    //   {
    //     title: "Md-pro Launch",
    //     start: new Date(y, m, d - 2, 12, 0),
    //     allDay: true,
    //     className: "event-azure",
    //   },
    //   {
    //     title: "Birthday Party",
    //     start: new Date(y, m, d + 1, 19, 0),
    //     end: new Date(y, m, d + 1, 22, 30),
    //     allDay: false,
    //     className: "event-azure",
    //   },
    //   {
    //     title: "Click for Creative Tim",
    //     start: new Date(y, m, 21),
    //     end: new Date(y, m, 22),
    //     url: "https://www.creative-tim.com/",
    //     className: "event-orange",
    //   },
    //   {
    //     title: "Click for Google",
    //     start: new Date(y, m, 21),
    //     end: new Date(y, m, 22),
    //     url: "https://www.creative-tim.com/",
    //     className: "event-orange",
    //   },
    // ];
  }
  handleDateClick() {
    console.log("test");
  }

  showEvent(event) {
    console.log(event);
    swal.fire({
      title: event.event._def.title,
      showCancelButton: true,
      icon: "info",
      html: `<b>Check-In Date:</b> ${event.event._instance.range.start}`,
    });
    console.log(event, "eve");
  }

  addEvent(event) {
    swal
      .fire({
        title: "Create an Event",

        customClass: {
          confirmButton: "btn btn-fill btn-primary",
          cancelButton: "btn btn-default",
          input: "swl-input",
        },
        showCancelButton: true,
        confirmButtonText: "Save",
        input: "text",
        inputPlaceholder: "Event Title",
      })
      .then((result) => {
        this.fullcalendar.getApi().addEvent({
          title: result.value,
          start: event.date,
          className: "event-default",
        });
      });
    console.log(event, "eve");
  }
}
