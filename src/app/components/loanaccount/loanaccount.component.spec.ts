import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanaccountComponent } from './loanaccount.component';

describe('LoanaccountComponent', () => {
  let component: LoanaccountComponent;
  let fixture: ComponentFixture<LoanaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
