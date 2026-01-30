import { TestBed } from '@angular/core/testing';
import { App } from './app';

it('should create the app', () => {
  const fixture = TestBed.createComponent(App);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});
