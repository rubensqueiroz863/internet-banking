import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginbutton } from './loginbutton';

describe('Loginbutton', () => {
  let component: Loginbutton;
  let fixture: ComponentFixture<Loginbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
