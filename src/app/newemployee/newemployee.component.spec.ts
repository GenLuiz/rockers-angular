import { NewemployeeComponent } from './newemployee.component';

fdescribe('NewemployeeComponent', () => {
  let component: NewemployeeComponent;

  beforeEach(() => {
    component = new NewemployeeComponent;
  });

  it('should be created the component', () => {
    expect(component).toBeTruthy();
  });

  it('object employee should be undefined',() =>{
    expect(component.employee).toBeUndefined();
  });

  it('after ngOnInit object employee should be defined',() =>{
    component.ngOnInit();
    expect(component.employee).toBeDefined();
  });
  
});
