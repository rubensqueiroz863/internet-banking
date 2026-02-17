import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showinfomenu } from './showinfomenu';

describe('Showinfomenu', () => {
  let component: Showinfomenu;
  let fixture: ComponentFixture<Showinfomenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showinfomenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showinfomenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
