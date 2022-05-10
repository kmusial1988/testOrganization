import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomGetComponent } from './conference-room-get.component';

describe('ConferenceRoomGetComponent', () => {
  let component: ConferenceRoomGetComponent;
  let fixture: ComponentFixture<ConferenceRoomGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
