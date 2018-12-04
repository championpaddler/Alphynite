import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecComponent } from './singlec.component';

describe('SinglecComponent', () => {
  let component: SinglecComponent;
  let fixture: ComponentFixture<SinglecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
