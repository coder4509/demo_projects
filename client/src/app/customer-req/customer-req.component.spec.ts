import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReqComponent } from './customer-req.component';

describe('CustomerReqComponent', () => {
  let component: CustomerReqComponent;
  let fixture: ComponentFixture<CustomerReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
