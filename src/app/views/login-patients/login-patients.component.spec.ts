import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPatientsComponent } from './login-patients.component';

describe('LoginPatientsComponent', () => {
  let component: LoginPatientsComponent;
  let fixture: ComponentFixture<LoginPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
