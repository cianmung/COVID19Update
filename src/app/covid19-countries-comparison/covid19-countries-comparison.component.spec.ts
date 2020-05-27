import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19CountriesComparisonComponent } from './covid19-countries-comparison.component';

describe('Covid19CountriesComparisonComponent', () => {
  let component: Covid19CountriesComparisonComponent;
  let fixture: ComponentFixture<Covid19CountriesComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19CountriesComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19CountriesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
