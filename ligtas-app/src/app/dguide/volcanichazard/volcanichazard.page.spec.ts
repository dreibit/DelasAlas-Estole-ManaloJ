import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolcanichazardPage } from './volcanichazard.page';

describe('VolcanichazardPage', () => {
  let component: VolcanichazardPage;
  let fixture: ComponentFixture<VolcanichazardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolcanichazardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
