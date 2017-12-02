import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe(`PageNotFound Component`, () => {
    let comp: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(PageNotFoundComponent);
        comp = fixture.componentInstance;
    }));

    it('should be able to define and create PageNotFoundComponent', () => {
        fixture.detectChanges();
        expect(comp).toBeDefined();
        expect(comp).toBeTruthy();
    });
});
