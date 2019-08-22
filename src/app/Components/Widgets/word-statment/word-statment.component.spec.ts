import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStatmentComponent } from './word-statment.component';

describe('WordStatmentComponent', () => {
  let component: WordStatmentComponent;
  let fixture: ComponentFixture<WordStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
