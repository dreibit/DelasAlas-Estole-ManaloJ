import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomefiresPage } from './homefires.page';

describe('HomefiresPage', () => {
  let component: HomefiresPage;
  let fixture: ComponentFixture<HomefiresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomefiresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
