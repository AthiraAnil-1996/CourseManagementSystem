import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiHeaderComponent } from './notifi-header.component';

describe('NotifiHeaderComponent', () => {
  let component: NotifiHeaderComponent;
  let fixture: ComponentFixture<NotifiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
