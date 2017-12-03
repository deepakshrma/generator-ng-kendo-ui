import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpMePageComponent } from './help-me.component';

describe (`HelpMe Component`, () => {
  let comp: HelpMePageComponent;
  let fixture: ComponentFixture<HelpMePageComponent>;
  beforeEach (async (() => {
    TestBed.configureTestingModule ({
      declarations: [HelpMePageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent (HelpMePageComponent);
    comp = fixture.componentInstance;
  }));

  it ('should be able to define and create HelpMePageComponent', () => {
    fixture.detectChanges ();
    expect (comp).toBeDefined ();
    expect (comp).toBeTruthy ();
  });
});
