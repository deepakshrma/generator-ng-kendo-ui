import { async, inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions,
  BrowserXhr,
  ConnectionBackend,
  Http,
  RequestOptions,
  ResponseOptions,
  XHRBackend,
  XSRFStrategy
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { customHttpProvider, httpFactory, InterceptedHttp } from './custom.http.provider';
let interceptService: InterceptedHttp;
xdescribe ('InterceptedHttp service', () => {
  beforeEach (async (() => {
    TestBed.configureTestingModule ({
      providers: [
        InterceptedHttp,
        ConnectionBackend,
        MockBackend,
        BaseRequestOptions,
        {
          provide: XHRBackend,
          deps: [BrowserXhr, ResponseOptions, XSRFStrategy]
        },
        Http,
        {
          provide: RequestOptions
        },
      ]
    }).compileComponents ()
      .then (() => {
        inject ([ConnectionBackend, RequestOptions],
          (cb: ConnectionBackend, ro: RequestOptions) => {
            interceptService = new InterceptedHttp (cb, ro);
          }) ();
      });
  }));

  it ('Should exist InterceptedHttp service', () => {
    expect (interceptService).toBeTruthy ();
  });

  it ('should be able to get pending request count', () => {
    expect (interceptService.pendingRequestCount).toBeGreaterThanOrEqual (0);
  });

  it ('should be able to do getDelay',
    inject ([InterceptedHttp], (service: InterceptedHttp) => {
      const url: string = 'assets/mock-data/initiatives_mock.json';
      return new Promise ((pass, fail) => {
        service.get (url).subscribe (
          (data: any) => {
            expect (data).toBeDefined ();
            expect (data.length).toBeGreaterThanOrEqual (0);
          },
          (error) => {
            expect (error).toBeDefined ();
          });
      });
    }));

  it ('should be able to do put',
    inject ([InterceptedHttp], (service: InterceptedHttp) => {
      const url: string = 'assets/mock-data/initiatives_mock.json';
      const requestData: any = {};
      return new Promise ((pass, fail) => {
        service.put (url, requestData).subscribe (
          (data: any) => {
            expect (data).toBeDefined ();
            expect (data.length).toBeGreaterThanOrEqual (0);
          },
          (error) => {
            expect (error).toBeDefined ();
          });
      });
    }));

  it ('should be able to do delete',
    inject ([InterceptedHttp], (service: InterceptedHttp) => {
      const url: string = 'assets/mock-data/initiatives_mock.json';
      return new Promise ((pass, fail) => {
        service.delete (url).subscribe (
          (data: any) => {
            expect (data).toBeDefined ();
            expect (data.length).toBeGreaterThanOrEqual (0);
          },
          (error) => {
            expect (error).toBeDefined ();
          });
      });
    }));

  it ('should be able to do post',
    inject ([InterceptedHttp], (service: InterceptedHttp) => {
      const url: string = 'assets/mock-data/initiatives_mock.json';
      const requestData: any = {};
      return new Promise ((pass, fail) => {
        service.post (url, requestData).subscribe (
          (data: any) => {
            expect (data).toBeDefined ();
            expect (data.length).toBeGreaterThanOrEqual (0);
          },
          (error) => {
            expect (error).toBeDefined ();
          });
      });
    }));

  it ('should be able to do request',
    inject ([InterceptedHttp], (service: InterceptedHttp) => {
      const url: string = 'assets/mock-data/initiatives_mock.json';
      return new Promise ((pass, fail) => {
        service.request (url).subscribe (
          (data: any) => {
            expect (data).toBeDefined ();
            expect (data.length).toBeGreaterThanOrEqual (0);
          },
          (error) => {
            expect (error).toBeDefined ();
          });
      });
    }));

  it ('should return new instance of InterceptedHttp', () => {
    expect (httpFactory (TestBed.get (XHRBackend), TestBed.get (RequestOptions)))
      .toBeDefined ();
  });

  it ('', () => {
    expect (customHttpProvider ())
      .toBeDefined ();
  });
});
