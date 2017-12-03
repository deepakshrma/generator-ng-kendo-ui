import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { InterceptedHttp } from './custom.http.provider';
import { environment } from '../../../environments/environment';

@Injectable ()
export class AppConfigService {
  private allUrls: any = {};

  get urls() {
    return [...this.allUrls];
  }

  set urls(urls: any) {
    this.allUrls = urls;
  }

  constructor(private http: Http) {
  }

  public load() {
    const promise = new Promise ((resolve, reject) => {
      const localHost = new RegExp ('^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$');
      const configUrl = '/app-config';
      const response = localHost.test (window.location.hostname) ? Observable.of (environment.service_urls) : this.http.get (configUrl).map ((res) => res.json ());
      response.subscribe ((response: any) => {
          this.allUrls = Object.assign ({}, this.allUrls, response);
          InterceptedHttp.DEFAULT_ENDPOINT = this.allUrls.api_endpoint;
          resolve ();
        },
        this.handleFailure (reject));
    });
    return promise;
  }

  private handleFailure(reject: () => void) {
    return (error: Error) => {
      alert (`TODO: Seems like your service(/app-config) not working, Error:${error}`);
      return reject ();
    };
  }
}
export function startupServiceFactory(appConfig: AppConfigService): () => void {
  return () => {
    return appConfig.load ();
  }; // => required, otherwise `this` won't work inside StartupService::load
}
