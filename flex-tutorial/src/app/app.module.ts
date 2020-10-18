import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { EventListComponent } from "./events/event-list/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavbarComponent } from "./nav/navbar/navbar.component";
import { EventService } from "./events/shared/event.service";
import { EventListResolverService } from "./events/shared/event-list-resolver.service";
import { EventDetailsComponent } from "./events/event-details/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/error404/error404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResolverService,
    { provide: "canDeactivateCreatEvent", useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (!component.isDirty) {
    return window.confirm(
      "you did not saved this event do you really want to cancel ?"
    );
  }
  return true;
}
