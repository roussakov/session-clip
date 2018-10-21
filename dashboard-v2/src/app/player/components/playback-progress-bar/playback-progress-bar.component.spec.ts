import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackProgressBarComponent } from './playback-progress-bar.component';

describe('PlaybackProgressBarComponent', () => {
  let component: PlaybackProgressBarComponent;
  let fixture: ComponentFixture<PlaybackProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
