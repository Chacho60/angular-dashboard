import { Routes } from "@angular/router";

import { HomeComponent } from "../../home/home.component";
import { UserComponent } from "../../user/user.component";
import { TablesComponent } from "../../tables/tables.component";
import { SchedulesComponent } from "../../schedules/schedules.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { CalendarComponent } from "../../calendar/calendar.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TablesComponent },
  { path: "typographyx", component: TypographyComponent },
  { path: "iconsx", component: IconsComponent },
  { path: "mapsx", component: MapsComponent },
  { path: "notificationsx", component: NotificationsComponent },
  { path: "upgradex", component: UpgradeComponent },
  { path: "schedule", component: SchedulesComponent },
  { path: "calendar", component: CalendarComponent },
];
