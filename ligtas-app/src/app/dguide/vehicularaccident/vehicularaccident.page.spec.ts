import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicularaccidentPage } from './vehicularaccident.page';

describe('VehicularaccidentPage', () => {
  let component: VehicularaccidentPage;
  let fixture: ComponentFixture<VehicularaccidentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VehicularaccidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
