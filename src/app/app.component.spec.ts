import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent;
  });

  it('should create the app',() => {
    expect(component).toBeDefined();
  });
});
