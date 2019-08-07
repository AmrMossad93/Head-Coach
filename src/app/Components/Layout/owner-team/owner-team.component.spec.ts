import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerTeamComponent } from './owner-team.component';

describe('OwnerTeamComponent', () => {
  let component: OwnerTeamComponent;
  let fixture: ComponentFixture<OwnerTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
