import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijab } from './hijab';

describe('Hijab', () => {
  let component: Hijab;
  let fixture: ComponentFixture<Hijab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijab],
    }).compileComponents();

    fixture = TestBed.createComponent(Hijab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
