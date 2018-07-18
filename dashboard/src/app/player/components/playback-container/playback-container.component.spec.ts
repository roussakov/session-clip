import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackContainerComponent } from './playback-container.component';

describe('PlaybackContainerComponent', () => {
  let component: PlaybackContainerComponent;
  let fixture: ComponentFixture<PlaybackContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
