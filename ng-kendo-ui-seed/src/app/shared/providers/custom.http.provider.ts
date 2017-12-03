import { Injectable } from '@angular/core';
import { ConnectionBackend, Http, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

import { environment } from '../../../environments/environment';

@Injectable ()
export class InterceptedHttp extends Http {
  public static DEFAULT_ENDPOINT = environment.service_urls.api_endpoint;
  private requestCount = 0;

  constructor(private backend: ConnectionBackend, private defaultOptions: RequestOptions) {
    super (backend, defaultOptions);
  }

  get pendingRequestCount(): number {
    return this.requestCount;
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept (super.get (this.buildUrl (url), options));
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept (super.put (this.buildUrl (url), body, options));
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept (super.delete (this.buildUrl (url), options));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept (super.post (this.buildUrl (url), body, options));
  }

  private intercept(ob: Observable<any>): Observable<Response> {
    this.requestCount++;
    return ob.finally (() => {
      this.requestCount--;
    });
  }

  private buildUrl(url: string): string {
    return /(^https?:|\.json$)/.test (url) ? url : (InterceptedHttp.DEFAULT_ENDPOINT + url);
  }
}

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new InterceptedHttp (xhrBackend, requestOptions);
}

export function customHttpProvider() {
  return {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  };
}
