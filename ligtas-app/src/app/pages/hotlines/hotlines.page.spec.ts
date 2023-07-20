import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotlinesPage } from './hotlines.page';

describe('HotlinesPage', () => {
  let component: HotlinesPage;
  let fixture: ComponentFixture<HotlinesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
