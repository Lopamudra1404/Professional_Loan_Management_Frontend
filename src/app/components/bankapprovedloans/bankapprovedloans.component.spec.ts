import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankapprovedloansComponent } from './bankapprovedloans.component';

describe('BankapprovedloansComponent', () => {
  let component: BankapprovedloansComponent;
  let fixture: ComponentFixture<BankapprovedloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankapprovedloansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankapprovedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
