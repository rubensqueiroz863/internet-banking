import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarhome } from './navbarhome';

describe('Navbarhome', () => {
  let component: Navbarhome;
  let fixture: ComponentFixture<Navbarhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbarhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbarhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
