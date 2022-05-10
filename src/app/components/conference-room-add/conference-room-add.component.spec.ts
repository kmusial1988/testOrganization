import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomAddComponent } from './conference-room-add.component';

describe('ConferenceRoomAddComponent', () => {
  let component: ConferenceRoomAddComponent;
  let fixture: ComponentFixture<ConferenceRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
