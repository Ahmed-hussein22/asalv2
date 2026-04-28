import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijabdetals } from './hijabdetals';

describe('Hijabdetals', () => {
  let component: Hijabdetals;
  let fixture: ComponentFixture<Hijabdetals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijabdetals],
    }).compileComponents();

    fixture = TestBed.createComponent(Hijabdetals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
