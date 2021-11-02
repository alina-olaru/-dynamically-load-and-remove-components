import { Injectable, Type } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BannersService {
  private _bannersToAdd = new BehaviorSubject<any>(null);
  bannersToAdd$ = this._bannersToAdd.asObservable();

  private _bannersToRemove = new BehaviorSubject<any>(null);
  bannersToRemove$ = this._bannersToRemove.asObservable();
  constructor() {}

  addBanner(component: Type<any>): void {
    this._bannersToAdd.next(component);
  }

  removeBanner(component: Type<any>): void {
    this._bannersToRemove.next(component);
  }
}
