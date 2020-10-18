import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/error404/error404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventListResolverService } from './events/shared/event-list-resolver.service';

const routes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreatEvent"],
  },
  { path: "events", component: EventListComponent ,resolve:{events:EventListResolverService}},
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
