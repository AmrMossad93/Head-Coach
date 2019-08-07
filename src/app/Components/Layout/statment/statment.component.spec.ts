import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatmentComponent } from './statment.component';

describe('StatmentComponent', () => {
  let component: StatmentComponent;
  let fixture: ComponentFixture<StatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
