import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMenuCard } from './selectedmenucard';

describe('SelectedMenuCard', () => {
  let component: SelectedMenuCard;
  let fixture: ComponentFixture<SelectedMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedMenuCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
