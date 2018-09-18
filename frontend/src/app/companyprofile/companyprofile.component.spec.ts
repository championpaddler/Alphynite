import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyprofileComponent } from './companyprofile.component';

describe('CompanyprofileComponent', () => {
  let component: CompanyprofileComponent;
  let fixture: ComponentFixture<CompanyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
