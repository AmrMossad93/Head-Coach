import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioGuidComponent } from './vedio-guid.component';

describe('VedioGuidComponent', () => {
  let component: VedioGuidComponent;
  let fixture: ComponentFixture<VedioGuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioGuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioGuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
