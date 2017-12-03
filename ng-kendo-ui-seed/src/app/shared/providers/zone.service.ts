import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable ()
export class ZoneService {
  constructor(private ngZone: NgZone) {
  }
  public map(source) {
    return Observable.create ((subscriber) => {
      this.ngZone.runOutsideAngular (() => {
        const subscription = source.subscribe ((...args) => {
            this.ngZone.run (() => {
              subscriber.next (...args);
            });
          },
          (err) => subscriber.error (err),
          () => subscriber.complete ());
        return subscription;
      });
    });
  }
}
