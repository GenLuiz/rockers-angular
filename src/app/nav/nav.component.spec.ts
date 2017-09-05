import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  
  beforeEach(() => {
    component = new NavComponent;
    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
