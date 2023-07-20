import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloodsPage } from './floods.page';

describe('FloodsPage', () => {
  let component: FloodsPage;
  let fixture: ComponentFixture<FloodsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FloodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
