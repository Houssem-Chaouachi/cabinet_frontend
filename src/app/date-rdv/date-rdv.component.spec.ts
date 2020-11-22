import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRdvComponent } from './date-rdv.component';

describe('DateRdvComponent', () => {
  let component: DateRdvComponent;
  let fixture: ComponentFixture<DateRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
