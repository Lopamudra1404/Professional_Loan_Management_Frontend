import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdashboardComponent } from './bankdashboard.component';

describe('BankdashboardComponent', () => {
  let component: BankdashboardComponent;
  let fixture: ComponentFixture<BankdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
