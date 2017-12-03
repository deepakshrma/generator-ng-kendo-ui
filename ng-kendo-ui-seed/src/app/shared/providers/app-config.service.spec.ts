import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { AppConfigService } from './app-config.service';

xdescribe('Service : ConfigDataService', () => {
  let configDataService: AppConfigService;
  let mockBackend: MockBackend;

  const tempUrl = 'https://cap-cls-ui.sit.apps.cs.sgp.dbs.com/app-config';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfigService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(
    inject([Http, MockBackend], (http: Http, backend: MockBackend) => {
      configDataService = new AppConfigService(http);
      mockBackend = backend;
    })
  );
  // ToDo: Implement test cases
  it('should load config data service', () => {
    expect(configDataService).toBeDefined();
  });

  it('should call configDataService.urls method', () => {
    configDataService.urls = {user: 'access'};
    const key = 'user';
    const conf = configDataService.urls[key];
    expect(conf).toEqual('access');
  });

  it('should connect mock server ', fakeAsync(() => {
    configDataService.load();
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe(tempUrl);
    });
  }));
});
