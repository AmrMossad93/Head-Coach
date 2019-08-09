import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMangmentPageComponent } from './team-mangment-page.component';

describe('TeamMangmentPageComponent', () => {
  let component: TeamMangmentPageComponent;
  let fixture: ComponentFixture<TeamMangmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMangmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMangmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
