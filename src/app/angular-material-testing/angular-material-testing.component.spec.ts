import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTestingComponent } from './angular-material-testing.component';

describe('AngularMaterialTestingComponent', () => {
  let component: AngularMaterialTestingComponent;
  let fixture: ComponentFixture<AngularMaterialTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularMaterialTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterialTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
