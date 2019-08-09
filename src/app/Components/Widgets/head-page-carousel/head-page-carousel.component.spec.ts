import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPageCarouselComponent } from './head-page-carousel.component';

describe('HeadPageCarouselComponent', () => {
  let component: HeadPageCarouselComponent;
  let fixture: ComponentFixture<HeadPageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
