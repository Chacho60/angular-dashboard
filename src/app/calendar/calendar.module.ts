import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CalendarComponent } from "./calendar.component";
import { CalendarRoutes } from "./calendar.routing";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Events, CalendarService } from "./calendar.service";
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
]);
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CalendarRoutes),
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
  ],
  declarations: [CalendarComponent],
  providers: [CalendarService],
})
export class CalendarModule {}
