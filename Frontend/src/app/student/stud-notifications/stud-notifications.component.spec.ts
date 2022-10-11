import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudNotificationsComponent } from './stud-notifications.component';

describe('StudNotificationsComponent', () => {
  let component: StudNotificationsComponent;
  let fixture: ComponentFixture<StudNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
