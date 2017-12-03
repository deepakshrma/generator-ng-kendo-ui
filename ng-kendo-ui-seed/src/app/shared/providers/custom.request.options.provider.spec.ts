import { CSTRequestOptions } from './custom.request.options.provider';
import { RequestOptions } from '@angular/http';

describe ('CSTRequestOptions: Modules', () => {
  let customRequestOptions: CSTRequestOptions;
  beforeEach (() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        if (key === 'nothing') {
          return '';
        }
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(sessionStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    customRequestOptions = new CSTRequestOptions ();
  });

  it ('customRequestOptions merge method should be defined', () => {
    expect (customRequestOptions.merge).toBeDefined ();
  });
  it ('customRequestOptions merge will return default options RequestOptions', () => {
    const options = customRequestOptions.merge();
    expect (options instanceof RequestOptions).toBeTruthy();
  });
  it ('customRequestOptions merge and append token in request', () => {
    sessionStorage.setItem('access_token', 'xxxxxx');
    const options = customRequestOptions.merge();
    expect (options.headers.get('Authorization')).toContain('Bearer xxxxxx');
  });
});
