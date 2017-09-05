import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent;
    component.ngOnInit();
  });

  it('should instantiate logged var', () => {
    expect(component.logged).toBeDefined();
    expect(component.logged).toBeFalsy();
  });

  it('should change logged var to true', () => {
    component.login();
    expect(component.logged).toBeTruthy();
  });

  it('should change logged var to false', () => {
    component.logout();
    expect(component.logged).toBeFalsy();
  });
});
