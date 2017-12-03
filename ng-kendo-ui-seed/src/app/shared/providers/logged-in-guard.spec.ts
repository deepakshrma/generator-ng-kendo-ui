import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FOR_ROOT, LoggedInUserGuard } from './logged-in-guard';
import { BaseRequestOptions, ConnectionBackend, Http, HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AppConfigService } from './app-config.service';
import { RichLoginService } from '../../login-rich/login.service';

describe ('Testing LoggedInUserGuard', () => {

  const activeSnapshot = jasmine.createSpyObj<ActivatedRouteSnapshot> ('ActivatedRouteSnapshot', ['toString']);
  const stateSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot> ('RouterStateSnapshot', ['toString']);

  beforeEach (async () => {

    TestBed.configureTestingModule ({
      imports: [RouterTestingModule.withRoutes ([]), HttpModule],
      declarations: [],
      providers: [
        {provide: ConnectionBackend, useClass: MockBackend},
        BaseRequestOptions,
        {
          provide: Http,
          deps: [ConnectionBackend, BaseRequestOptions],
          useFactory: (defaultOptions: BaseRequestOptions, backend: XHRBackend) => {
            return new Http (backend, defaultOptions);
          },
        },
        {
          provide: AppConfigService, deps: [Http],
          useFactory: (Http) => {
            return new AppConfigService (Http);
          }
        },
        {
          provide: RichLoginService, deps: [AppConfigService, Http],
          useFactory: (AppConfigService, Http) => {
            return new RichLoginService (AppConfigService, Http);
          }
        },
        {
          provide: LoggedInUserGuard, deps: [Router, RichLoginService],
          useFactory: (Router, RichLoginService) => {
            return new LoggedInUserGuard (Router, RichLoginService);
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents ();
  });

  it ('should LoggedInUserGuard return status undefined', inject ([LoggedInUserGuard, ConnectionBackend], (loggedInUserGuard, mockBackend) => {

    loggedInUserGuard.canActivate (activeSnapshot, stateSnapshot).then ((result) => {
      expect (result).toBeUndefined ();

    });
  }));

  it ('should return FOR_ROOT instance', inject ([Router, RichLoginService], (router, loginService) => {
    expect (FOR_ROOT (router, loginService)).toBeDefined ();
  }));

});
