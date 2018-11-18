import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanComponent } from './han.component';

describe('HanComponent', () => {
  let component: HanComponent;
  let fixture: ComponentFixture<HanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
