import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBootstrapComponent } from './tabs-bootstrap.component';

describe('TabsBootstrapComponent', () => {
  let component: TabsBootstrapComponent;
  let fixture: ComponentFixture<TabsBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
