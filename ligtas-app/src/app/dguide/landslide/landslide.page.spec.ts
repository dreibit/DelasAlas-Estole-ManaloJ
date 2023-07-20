import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandslidePage } from './landslide.page';

describe('LandslidePage', () => {
  let component: LandslidePage;
  let fixture: ComponentFixture<LandslidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
