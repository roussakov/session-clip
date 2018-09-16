import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSessionPageComponent } from './view-session-page.component';

describe('ViewSessionPageComponent', () => {
  let component: ViewSessionPageComponent;
  let fixture: ComponentFixture<ViewSessionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSessionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
