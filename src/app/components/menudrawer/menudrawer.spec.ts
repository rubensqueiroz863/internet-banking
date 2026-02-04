import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menudrawer } from './menudrawer';

describe('Menudrawer', () => {
  let component: Menudrawer;
  let fixture: ComponentFixture<Menudrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menudrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menudrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
