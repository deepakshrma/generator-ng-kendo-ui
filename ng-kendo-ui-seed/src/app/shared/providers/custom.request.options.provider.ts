import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
export class CSTRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
    // Add header project specific, unique identifier
    this.headers.set ('x-ng-kendo-header', window.location.hostname);
    // for token interceptor

  }
  public merge(options?: RequestOptionsArgs): RequestOptions {
    if (options == null) {
      options = new RequestOptions ();
    }
    const updatedOptions = super.merge(options);
    const token = sessionStorage.getItem('access_token');
    if (!!token) {
      updatedOptions.headers.set('Authorization', 'Bearer ' + token);
    }
    return updatedOptions;
  }
}
export function customRequestOptionsProvider() {
  return {
    provide: RequestOptions,
    useClass: CSTRequestOptions
  };
}
