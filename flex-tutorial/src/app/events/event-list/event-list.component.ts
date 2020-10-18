import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"],
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });

    this.events = this.activedRoute.snapshot.data["events"];
  }
}
