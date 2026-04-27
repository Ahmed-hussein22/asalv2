import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdresses } from './productdresses';

describe('Productdresses', () => {
  let component: Productdresses;
  let fixture: ComponentFixture<Productdresses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productdresses],
    }).compileComponents();

    fixture = TestBed.createComponent(Productdresses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
