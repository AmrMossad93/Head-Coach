import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBoxesComponent } from './price-boxes.component';

describe('PriceBoxesComponent', () => {
  let component: PriceBoxesComponent;
  let fixture: ComponentFixture<PriceBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
