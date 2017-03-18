import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequestDetailsComponent } from './submit-request-details.component';

describe('SubmitRequestDetailsComponent', () => {
  let component: SubmitRequestDetailsComponent;
  let fixture: ComponentFixture<SubmitRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
