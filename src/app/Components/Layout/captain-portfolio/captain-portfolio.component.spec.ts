import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainPortfolioComponent } from './captain-portfolio.component';

describe('CaptainPortfolioComponent', () => {
  let component: CaptainPortfolioComponent;
  let fixture: ComponentFixture<CaptainPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
