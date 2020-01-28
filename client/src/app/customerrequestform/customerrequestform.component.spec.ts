import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrequestformComponent } from './customerrequestform.component';

describe('CustomerrequestformComponent', () => {
  let component: CustomerrequestformComponent;
  let fixture: ComponentFixture<CustomerrequestformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerrequestformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrequestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
