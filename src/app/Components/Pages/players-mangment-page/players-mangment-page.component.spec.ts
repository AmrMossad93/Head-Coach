import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersMangmentPageComponent } from './players-mangment-page.component';

describe('PlayersMangmentPageComponent', () => {
  let component: PlayersMangmentPageComponent;
  let fixture: ComponentFixture<PlayersMangmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersMangmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersMangmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
