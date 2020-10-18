import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { EventService } from "./event.service";
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // throw new Error("Method not implemented.");
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
