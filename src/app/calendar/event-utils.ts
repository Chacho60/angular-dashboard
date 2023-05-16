import { EventInput } from "@fullcalendar/core";

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
const MANY_STR = new Date("May 13, 2023 03:24:00")
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of 3 days after
const MANY_STR2 = new Date("May 15, 2023 03:24:00")
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of 3 days after
const MANY_STR3 = new Date("May 20, 2023 03:24:00")
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of 3 days after

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "Andree Torres",
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: "John Doe",
    start: TODAY_STR + "T00:00:00",
    end: MANY_STR3 + "T03:00:00",
  },
  {
    id: createEventId(),
    title: "Edgardo Moreno",
    start: MANY_STR2 + "T12:00:00",
    end: MANY_STR3 + "T15:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
