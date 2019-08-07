import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainServicesComponent } from './captain-services.component';

describe('CaptainServicesComponent', () => {
  let component: CaptainServicesComponent;
  let fixture: ComponentFixture<CaptainServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
